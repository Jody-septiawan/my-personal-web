import React from 'react'
import Masonry from 'react-masonry-css'

export default function ListImage({feeds}) {
    const unsplashImg = 'https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg'
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2
      };

    return (
        <>
            <span className="text-secondary">Results: {feeds.length}</span>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {feeds}
            </Masonry>
            <div className="bg-light p-2 d-inline-block mt-5 rounded d-lg-none">
                <div className="text-dark mb-2" style={{fontSize: '10px'}}>Support by:</div>
                <a href="https://unsplash.com/" style={{textDecoration: 'none'}}>
                    <img src={unsplashImg} className="img-fluid" />
                    <span className="text-dark ms-2">Unsplash</span>
                </a>
            </div>
        </>
    )
}
