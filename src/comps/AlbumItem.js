import React, { useEffect, useState } from 'react';
import gsap from 'gsap/gsap-core';

const AlbumItem = (props) => {

    const { data, handlePreview } = props;

    const [nbrPictures, setNbrPictures] = useState(0);
    const [tl1] = useState(gsap.timeline({paused:true}));

    useEffect(() => {
        setNbrPictures(data.pictures.length)
    });

    useEffect(() => {
        
    })

    const handleHoverEnter = () => {
        gsap.to(`.album-item-hover-${data.title}`,.5, {transform:"translateY(0%)"})
        gsap.to(`.album-item-${data.title}`,.5,{scale:1.15})
        gsap.to(`.album-cover-${data.title}`, .5, {boxShadow:"0px 10px 10px yellow"})
    }

    const handleHoverLeave = () => {
        gsap.to(`.album-item-hover-${data.title}`,.5, {transform:"translateY(-100%)"})
        gsap.to(`.album-item-${data.title}`,.5,{scale:1})
        gsap.to(`.album-cover-${data.title}`, .5, {boxShadow:"none"})
    }

    return (
        <div className={`album-item album-item-${data.title}`} onClick={() => handlePreview(data.title)}>
            <div className="album-item-hover-container" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
               <div className={`album-item-hover album-item-hover-${data.title}`}>
                    <p>{nbrPictures} photos</p>
               </div>
               <img src={`/assets/${data.small[0]}`} className={`album-cover album-cover-${data.title}`} id={`album-item-${data.title}`}></img>
            </div>
            <h2>{data.title}</h2>
        </div>
    )
}

export default AlbumItem;