import React from 'react'
import { Link } from 'react-router-dom'
import { ProfessorData } from '../data/PeopleData'

import GoogleScholarIcon from "../assets/social-icons/google-scholar.jpg"
import LinkedinIcon from "../assets/social-icons/linkedin.jpg"
import TwitterIcon from "../assets/social-icons/twitter.jpg"
import EmailIcon from "../assets/social-icons/email.jpg"
import ResearchGateIcon from "../assets/social-icons/research-gate.jpg"

const Professor = () => {
    return (

        <dic className="page-section">
            <div className="people-card">
                {ProfessorData.map(people => {
                    return (
                        <div className='people-card-item' data-aos="fade-up">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="people-card-img">
                                        <img src={people.Image} alt='People' />

                                    </div>


                                </div>
                                <div className="col-md-8">
                                    <div className="people-card-content">
                                        <Link to={`/people/${people.Name}`} onClick={() => window.scrollTo(0, 0)}>
                                            <h2>{people.Name}</h2>
                                        </Link>
                                        <p>{people.Programme}</p>
                                        <p>Pankaj’s work integrates both field and laboratory investigations, from modern to ancient reefs, and from qualitative to quantitative assessment of carbonate depositional systems. He has conducted fieldwork and training on three continents and in more than ten countries from India to Americas. Currently he is working on understanding Quaternary evolution of Lakshadweep and Andaman Islands and processes influencing their growth/retreat. He has also initiated a project on Fossilized geothermal systems in outcrops as analogues to subsurface geothermal reservoirs in Ladakh. He also plans to soon initiate a project on Carbon capture in Deccan Basalts.</p>
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
    )
}

export default Professor