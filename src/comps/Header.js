import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import gsap from 'gsap';

const Header = () => {

    const [redirect, setRedirect] = useState(false);
    const [to, setTo] = useState("");
    const [tl1] = useState(gsap.timeline({paused:true}));

    const handleClick = (target) => {
        setTo(target);
        gsap.to('.app-tr-1 li', .5, {scaleY:1,stagger:.1, onComplete:() => {
            setRedirect(true);
            gsap.to('.app-tr-1 li', .5, {scaleY:0, stagger:.1});
            setRedirect(false);
        }});
    }

    if(redirect)
        return <Redirect to={`/${to}`} />
    else 
        return (
            <div className="header-main-container">
                <nav className="header-nav-container">
                    <li className="nav-item" onClick={() => handleClick("")}>Acceuil</li>
                    <li className="nav-item" onClick={() => handleClick("albums")}>Albums</li>                    
                    <li className="nav-item" onClick={() => handleClick("about")}>À propos</li>                    
                    <li className="nav-item" onClick={() => handleClick("contact")}>Contact</li>                    
                </nav>
            </div>
        )
}

export default Header;