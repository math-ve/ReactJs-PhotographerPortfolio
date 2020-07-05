import React, { useEffect, useState } from 'react';
import api from '../api/api';
import AlbumItem from '../comps/AlbumItem';

import gsap from 'gsap';
import AlbumView from '../comps/AlbumView';

const Albums = () => {

    const [allAlbums, setAllAlbums] = useState([]);
    const [tl1] = useState(gsap.timeline({paused:true}));
    const [currentAlbum, setCurrentAlbum] = useState({data:{title:"", pictures:[], small:[]}});

    //API FETCH
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.readAll();
            setAllAlbums(result);
        }
        fetchData();
    },[]);

    //TL1 DEF
    useEffect(() => {
        tl1.to('.albums-container', .5, {opacity:0})
        .from('.album-view-list-container',.5, {xPercent:-100})
        .from('.album-view-full-container', .5, {xPercent:100}, "-=.5")
        .to('.album-view-list-container', 0, {pointerEvents:"all"})
    },[])

    const handlePreview = (albumTitle) => {
        tl1.play();
        const found = allAlbums.find(elem => elem.data.title === albumTitle);
        setCurrentAlbum(found);
    }

    const handleLeave = () => {
        tl1.reverse();
    }

    return (
        <div className="albums-main-container">
            <div className="albums-container" id="album-tr-bg">
                <h1>Albums</h1>
                <div className="albums">
                    {allAlbums.map((album, index) => (
                        <AlbumItem key={index} data={album.data} handlePreview={handlePreview}/>
                    ))}
                </div>
            </div>
            <AlbumView album={currentAlbum.data} backToAlbums={handleLeave}/>
        </div>
    )
}

export default Albums;