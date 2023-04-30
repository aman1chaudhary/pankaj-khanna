import React from 'react'
import { Helmet } from "react-helmet";
import SimpleImageSlider from "react-simple-image-slider";
import IMG1 from "../assets/gallery/1.jpg"
import IMG2 from "../assets/gallery/2.jpg"
import IMG3 from "../assets/gallery/3.jpg"
import IMG4 from "../assets/gallery/4.jpg"
// import IMG5 from "../assets/gallery/5.jpg"
import IMG6 from "../assets/gallery/6.jpg"


const images = [
    { url: IMG1 },
    { url: IMG2 },
    { url: IMG3 },
    { url: IMG4 },
    // { url: IMG5 },
    { url: IMG6 },
];

const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>Gallery</title>
                <meta name="description" content="#" />
            </Helmet>
            <header id="page-header">
                <div className="page-banner-content">
                    <h1>Gallery</h1>
                </div>
            </header>

            <div className="main-container">
                <div className="image-slider">
                <SimpleImageSlider
                    width="100%"
                    height="100%"
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    style={{width:"100%",height:"80vh",maxHeight:"900px", position:"relative"}}
                    slideDuration={0.6}
                    autoPlay={true}
                />

                </div>
                

            </div>



        </div>
    )
}

export default Gallery
