import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { DoctoraMembersData } from "../data/PeopleData"
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

import GoogleScholarIcon from "../assets/social-icons/google-scholar.jpg"
import LinkedinIcon from "../assets/social-icons/linkedin.jpg"
import TwitterIcon from "../assets/social-icons/twitter.jpg"
import EmailIcon from "../assets/social-icons/email.jpg"
import ResearchGateIcon from "../assets/social-icons/research-gate.jpg"

const People = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Helmet>
                <title>People</title>
                <meta name="description" content="#" />
            </Helmet>
            <header id="page-header">
                <div className="page-banner-content">
                    <h1>People</h1>
                </div>
            </header>
            <div className='main-container'>
                <dic className="page-section">

                    <div className="people-card">
                        {DoctoraMembersData.map(people => {
                            return (
                                <div className='people-card-item' data-aos="fade-up">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="people-card-img">
                                                <Link to={`/people/${people.Name}`} onClick={() => window.scrollTo(0, 0)}><img src={people.Image} alt='People' /></Link>

                                            </div>


                                        </div>
                                        <div className="col-md-9">
                                            <div className="people-card-content">
                                                <Link to={`/people/${people.Name}`} onClick={() => window.scrollTo(0, 0)}>
                                                    <h2>{people.Name}</h2>
                                                </Link>
                                                <p>{people.Programme}</p>
                                                <p><strong>Research Interests:</strong> {people.ResearchInterests}</p>

                                            </div>



                                            <div className="people-card-social-icons">
                                                {people.Email && <a href={`mailto:${people.Email}`} target="_blank" rel="noreferrer">
                                                    <img src={EmailIcon} alt="Social Icon" title='Mail' className="people-card-social-icons-img" />
                                                </a>}


                                                {people.SocialLinks.GoogleScholar && <a href={people.SocialLinks.GoogleScholar} target="_blank" rel="noreferrer">
                                                    <img src={GoogleScholarIcon} alt="Social Icon" title='Google Scholar' className="people-card-social-icons-img" />
                                                </a>}

                                                {people.SocialLinks.Linkedin && <a href={people.SocialLinks.Linkedin} target="_blank" rel="noreferrer">
                                                    <img src={LinkedinIcon} alt="Social Icon" title='LinkedIn' className="people-card-social-icons-img" />
                                                </a>}



                                                {people.SocialLinks.Twitter && <a href={people.SocialLinks.Twitter} target="_blank" rel="noreferrer">
                                                    <img src={TwitterIcon} alt="Social Icon" title='Twitter' className="people-card-social-icons-img" />
                                                </a>}

                                                {people.SocialLinks.ResearchGate && <a href={people.SocialLinks.ResearchGate} target="_blank" rel="noreferrer">
                                                    <img src={ResearchGateIcon} alt="Social Icon" title='Research Gate' className="people-card-social-icons-img" />
                                                </a>}
                                            </div>

                                            <div className="card-lg-container-btn">
                                                <Link to={`/people/${people.Name}`} onClick={() => window.scrollTo(0, 0)}><button className="card-lg-btn">Know More </button></Link>
                                            </div>






                                        </div>



                                    </div>

                                </div>
                            )
                        })}

                    </div>




                </dic>





            </div>
        </>

    )
}

export default People