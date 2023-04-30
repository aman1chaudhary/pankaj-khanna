import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import RecentUpdates from '../components/RecentUpdates';
import Professor from './Professor';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>Energy & Climate Lab | IIT Gandhinagar</title>
                <meta name="description" content="#" />
            </Helmet>

            <header id="head">
                <div className="banner-content">
                    <h1>ENERGY & CLIMATE LAB</h1>
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
                <RecentUpdates />

            </div>




        </>

    )
}

export default Home