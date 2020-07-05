import React, { useEffect, useState } from 'react';
import gsap from 'gsap/gsap-core';

const AlbumItem = (props) => {

    const { data, handlePreview } = props;

    return (
        <div className="album-item" onClick={() => handlePreview(data.title)}>
            <div className="album-item-hover-container">
               <img src={`/assets/${data.small[0]}`} className="album-cover" id={`album-item-${data.title}`}></img>
               <div className="album-item-hover"></div>
            </div>
            <h2>{data.title}</h2>
        </div>
    )
}

export default AlbumItem;