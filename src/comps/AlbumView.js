import React, { useEffect, useState } from 'react';
import AlbumImgItem from './AlbumImgItem';
import gsap from 'gsap';

const AlbumView = (props) => {

    const { album, backToAlbums } = props;

    const [currentFullView, setCurrentFullView] = useState("");


    useEffect(() => {
        setCurrentFullView(album.pictures[0])
    },[album])

    // WAIT FOR IMG TO LOAD
    useEffect(() => {
        const imgElem = document.getElementById('current-full-view');
        imgElem.addEventListener('load', () => {
            gsap.to('.album-current-full-view',1.5 ,{opacity:1});
        })
    })

    const handleFullView = (index) => {
        if (album.pictures[index] !== currentFullView)
            gsap.to('.album-current-full-view',.5 ,{opacity:0, onComplete:() => {
                setCurrentFullView(album.pictures[index]);
            }})
    }
    
    return (
        <div className="album-view-container">
            <div className="album-view-list-container">
                <div className="album-view-list-header-container">
                    <img src="/assets/icon/back.png" alt="back-icon" className="album-back-icon" onClick={backToAlbums}/>
                    <h1 className="album-view-title">{album.title}</h1>
                </div>
                <div className="album-view-img-list">
                    {album.small.map((picture, index) => (
                        <AlbumImgItem picture={picture} key={index} index={index} handleFullView={handleFullView}/>
                    ))}
                </div>
            </div>
            <div className="album-view-full-container">
                <img src={`/assets/${currentFullView}`} alt="currentfullview" className="album-current-full-view" id="current-full-view"/>                    
            </div>
        </div>
    )
}

export default AlbumView;