import React from 'react'
import { Helmet } from "react-helmet";
import ImageCarousel from '../components/ImageCarousel';
import Professor from './Professor';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Pankaj Khanna | IIT Gandhinagar</title>
                <meta name="description" content="#" />
            </Helmet>

            <header id="head">
                <div className="banner-content">
                    <h1>DISCIPLINE OF<br /> EARTH SCIENCES</h1>
                    <h2>IIT Gandhinagar</h2>
                </div>
            </header>
            
            <div className="page-section">
                <div className="section-heading">
                    <h1>Meet the Professor</h1>
                </div>
                <Professor/>


            </div>

            <div className="page-section">
                <div className="section-heading">
                    <h1>Recent Updates</h1>
                </div>
                <ImageCarousel />

            </div>




        </>

    )
}

export default Home