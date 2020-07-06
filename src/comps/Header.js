import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Header = (props) => {

    const location = useLocation();
    const [tl1] = useState(gsap.timeline({paused:true}));
    const [redirect, setRedirect] = useState(false);
    const [to, setTo] = useState("");


    //TL1 DEF
    useEffect(() => {
        tl1.to('.album-view-list-container', 0, {pointerEvents:"none"})
        .to('.album-view-list-container',.5, {xPercent:-100})
        .to('.album-view-full-container', .5, {xPercent:100}, "-=.5")
        .to('.albums-container', .5, {opacity:1})        
    },[])

    const handleClick = (target) => {
        if (location.pathname !== target)
        {
            setTo(target);
            gsap.to('.app-tr-1 li', .5, {scaleY:1,stagger:.1, onComplete:() => {
                setRedirect(true);
                gsap.to('.app-tr-1 li', .5, {scaleY:0, stagger:.1});
                setRedirect(false);
            }});                
        }
    }

    if(redirect)
        return <Redirect to={`${to}`} />
    else 
        return (
            <div className="header-main-container">
                <nav className="header-nav-container">
                    <li className="nav-item" onClick={() => handleClick("/")}>Acceuil</li>
                    <li className="nav-item" onClick={() => handleClick("/albums")}>Albums</li>                    
                    <li className="nav-item" onClick={() => handleClick("/about")}>À propos</li>                    
                    <li className="nav-item" onClick={() => handleClick("/contact")}>Contact</li>                    
                </nav>
            </div>
        )
}

export default Header;