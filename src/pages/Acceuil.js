import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import gsap from 'gsap';

const Acceuil = () => {

    const [redirect, setRedirect] = useState(false);
    const [tl1] = useState(gsap.timeline(/*{paused:true}*/));

    const handleClick = () => {
        setRedirect(true);
    }

    useEffect(() => {
        tl1.from('.acceuil-name', 1, {opacity:0, scale:0})
        .from('.acceuil-name h1', 1, {transform:"scale(2)",y:500,opacity:0},"-=1")
        .from('.acceuil-tr-top, .acceuil-tr-bottom', .5, {scaleX:0})
        .from('.acceuil-tr-left, .acceuil-tr-right', .5, {scaleY:0})
        .from('.acceuil-button-container', 1.5, {opacity:0})
        
    })


    if(redirect)
        return (
            <Redirect to="/albums" />
        )
    else
        return (
            <div className="acceuil-main-container">
                <div className="acceuil-name-container">
                    <div className="acceuil-name">
                        <div className="acceuil-tr-top"></div>
                        <div className="acceuil-tr-right"></div>
                        <h1>Théo Arnaud-Fassetta</h1>
                        <div className="acceuil-tr-bottom"></div>
                        <div className="acceuil-tr-left"></div>
                    </div>
                </div>

                <div className="acceuil-button-container">
                    <div className="acceuil-button" onClick={handleClick}>
                        <p>Mes albums</p>
                    </div>
                </div>
            </div>
        )
}

export default Acceuil;