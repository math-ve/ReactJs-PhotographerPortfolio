import React from 'react';
import gsap from 'gsap';

const AlbumImgItem = (props) => {

    const { picture, index, handleFullView } = props;

    const handleHoverEnter = () => {
        gsap.to(`.album-view-img-hover-${index}`,.35, {transform:"translateX(0%)"})
    }

    const handleHoverLeave = () => {
        gsap.to(`.album-view-img-hover-${index}`,.35, {transform:"translateX(100%)"})
    }


    return (
        <div className="album-view-img-container" onClick={() => handleFullView(index)} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
            <div className={`album-view-img-hover album-view-img-hover-${index}`}>
                <img src="/assets/icon/search.png" alt="search-icon" className="search-icon" />
            </div>
            <img
                src={`assets/${picture}`}
                alt={picture}
                className="album-view-img-item"
            />
        </div>
    )
}

export default AlbumImgItem;