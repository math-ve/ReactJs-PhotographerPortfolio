import React, { useEffect, useState } from 'react';

const AlbumImgItem = (props) => {

    const { picture, index, handleFullView } = props;


    return (
        <div className="album-view-img-container" onClick={() => handleFullView(index)}>
            <img
                src={`assets/${picture}`}
                alt={picture}
                className="album-view-img-item"
            />
        </div>
    )
}

export default AlbumImgItem;