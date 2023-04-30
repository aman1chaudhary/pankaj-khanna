import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { PublicationsData } from '../data/PublicationsData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Publications = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const [yearFilter, setYearFilter] = useState('All');
    const [authorFilter, setAuthorFilter] = useState('All');
    const [typeFilter, setTypeFilter] = useState('All');

    const uniqueYears = [...new Set(PublicationsData.map(article => article.PublicationYear))];
    const uniqueAuthors = [...new Set(PublicationsData.flatMap(article => article.Authors))].sort();
    const uniqueTypes = [...new Set(PublicationsData.map(article => article.PublicationType))];

    const filteredArticles = PublicationsData.filter(article => {
        return (yearFilter === 'All' || article.PublicationYear === yearFilter) &&
            (authorFilter === 'All' || article.Authors.includes(authorFilter)) &&
            (typeFilter === 'All' || article.PublicationType === typeFilter);
    });
    return (
        <>
            <Helmet>
                <title>Publications</title>
                <meta name="description" content="#" />
            </Helmet>
            <header id="page-header">
                <div className="page-banner-content">
                    <h1>Publications</h1>
                </div>
            </header>

            <div className='main-container'>
                <div className='filter-container'>
                    <div className="filter-container-item">
                        <p>Select Type</p>
                        <select className='publication-filter' value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                            <option value='All'>All</option>
                            {uniqueTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>

                    </div>

                    <div className="filter-container-item">
                        <p>Year</p>
                        <select className='publication-filter' value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
                            <option value='All'>All</option>
                            {uniqueYears.map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                            ))}
                        </select>

                    </div>

                    <div className="filter-container-item">
                        <p>Author</p>
                        <select className='publication-filter' value={authorFilter} onChange={(e) => setAuthorFilter(e.target.value)}>
                            <option value='All'>All</option>
                            {uniqueAuthors.map((author, index) => (
                                <option key={index} value={author}>{author}</option>
                            ))}
                        </select>

                    </div>

                </div>

                <div className="section">
                    <div className='para-content'>
                        {filteredArticles.length > 0 ? (
                            <ol className='list-items'>
                                {filteredArticles.map(article => (
                                    <li className='publication-list' key={article.PublicationTitle} data-aos="fade-up">
                                        {article.PublicationLink ?
                                            <a href={article.PublicationLink} target='_blank' rel='noreferrer'>{article.PublicationTitle}</a>
                                            :
                                            <p>{article.PublicationTitle}</p>
                                        }
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            <p>No publication found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Publications