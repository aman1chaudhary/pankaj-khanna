import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DoctoraMembersData } from '../data/PeopleData';
import EmptyList from '../components/EmptyList';
import { Helmet } from 'react-helmet';
import GoogleScholarIcon from "../assets/social-icons/google-scholar.jpg"
import LinkedinIcon from "../assets/social-icons/linkedin.jpg"
import TwitterIcon from "../assets/social-icons/twitter.jpg"
import EmailIcon from "../assets/social-icons/email.jpg"
import ResearchGateIcon from "../assets/social-icons/research-gate.jpg"
import PortfolioLinkIcon from "../assets/social-icons/portfolio-link.jpg"

function MyList({ items }) {
    return (
        <div className="para-content">
            <ol>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>

        </div>

    );
}

const PeopleDetails = () => {
    const { Name } = useParams();
    const [people, setPeople] = useState(null);
    useEffect(() => {
        let people = DoctoraMembersData.find((people) => people.Name === (Name));
        if (people) {
            setPeople(people);
        }
    }, [Name]);
    return (
        <div>
            {people ? (
                <div>
                    <Helmet>
                        <title>People | {people.Name}</title>
                    </Helmet>
                    <header id="page-header">
                        <div className="page-banner-content">
                            <h1>{people.Name}</h1>
                        </div>
                    </header>

                    <div className="page-section">
                        <div className="row">
                            <div className="col-md-4">
                                

                                
                                <div className="people-page-image">
                                    <img src={people.Image} alt='' />
                                    <h4>{people.Name}</h4>
                                    <p>{people.Programme}</p>
                                    <p>{people.Department}</p>
                                </div>
                                <div className="people-social-icons">
                                    {people.Email && <a href={`mailto:${people.Email}`} target="_blank" rel="noreferrer">
                                        <img src={EmailIcon} alt="Social Icon" title='Mail' className="people-social-icons-img" />
                                    </a>}


                                    {people.SocialLinks.GoogleScholar && <a href={people.SocialLinks.GoogleScholar} target="_blank" rel="noreferrer">
                                        <img src={GoogleScholarIcon} alt="Social Icon" title='Google Scholar' className="people-social-icons-img" />
                                    </a>}

                                    {people.SocialLinks.Linkedin && <a href={people.SocialLinks.Linkedin} target="_blank" rel="noreferrer">
                                        <img src={LinkedinIcon} alt="Social Icon" title='LinkedIn' className="people-social-icons-img" />
                                    </a>}



                                    {people.SocialLinks.Twitter && <a href={people.SocialLinks.Twitter} target="_blank" rel="noreferrer">
                                        <img src={TwitterIcon} alt="Social Icon" title='Twitter' className="people-social-icons-img" />
                                    </a>}

                                    {people.SocialLinks.ResearchGate && <a href={people.SocialLinks.ResearchGate} target="_blank" rel="noreferrer">
                                        <img src={ResearchGateIcon} alt="Social Icon" title='Research Gate' className="people-social-icons-img" />
                                    </a>}
                                    {people.SocialLinks.PortfolioWebsite && <a href={people.SocialLinks.PortfolioWebsite} target="_blank" rel="noreferrer">
                                        <img src={PortfolioLinkIcon} alt="Social Icon" title='Portfolio Website' className="people-social-icons-img" />
                                    </a>}
                                </div>

                            </div>
                            <div className="col-md-8">
                                <div className="people-details">
                                    {people.Education.length === 0 ? (
                                        <></>
                                    ) : (
                                        <div className='people-details-item'>
                                            <h2>
                                                Education & Experience:
                                            </h2>
                                            <MyList items={people.Education} />

                                        </div>
                                    )}
                                    {people.ResearchAreas.length === 0 ? (
                                        <></>
                                    ) : (
                                        <div className='people-details-item'>
                                            <h2>
                                                Research Interests:
                                            </h2>
                                            <MyList items={people.ResearchAreas} />

                                        </div>
                                    )}

                                    {people.Achievements.length === 0 ? (
                                        <></>
                                    ) : (
                                        <div className='people-details-item'>
                                            <h2>
                                                Achievements:
                                            </h2>
                                            <MyList items={people.Achievements} />

                                        </div>
                                    )}

                                    {people.Publications.length === 0 ? (
                                        <></>
                                    ) : (
                                        <div className='people-details-item'>
                                            <h2>
                                                Publications:
                                            </h2>
                                            <MyList items={people.Publications} />

                                        </div>
                                    )}
                                    {people.Conferences.length === 0 ? (
                                        <></>
                                    ) : (
                                        <div className='people-details-item'>
                                            <h2>
                                                Conferences:
                                            </h2>
                                            <MyList items={people.Conferences} />

                                        </div>

                                    )}

                                </div>

                            </div>
                        </div>




                    </div>




                </div>
            ) : (
                <EmptyList />
            )}

        </div>
    )
}

export default PeopleDetails