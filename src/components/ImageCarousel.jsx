import React, { useState, useEffect } from 'react';
import Papa from "papaparse";

function ImageCarousel() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQeL4sGiF3H2TkwbZ_N7KD-a2odYe4p4PegdVLWOwr299O0nIEtbsGfTa8fLkBJKo8jL7BSL4c2t7Be/pub?output=csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: (results) => {
                setData(results.data);
            }
        });
    }, []);




    return (
        <div className="image-carousel-container">

            {data.length ?
                <div className="recent-update-section">
                    <div className="row">
                        {data.map((item, index) => {
                            return (
                                <div className='col-md-4'>
                                    <div className="card-item">
                                        <div className="card-item-img">
                                        <a href={item.ArticleLink} target="_blank" rel="noreferrer"> <img src={item.ImageLink} alt='item' /></a>
                                        </div>
                                        <div className="card-item-content">
                                            <a href={item.ArticleLink} target="_blank" rel="noreferrer"> <p>{item.Title}</p></a>
                                            
                                            <span className='card-date'><i class="fa fa-calendar" aria-hidden="true"></i> {item.PublishedDate} </span>

                                        </div>

                                    </div>

                                </div>


                            )
                        })}
                    </div>



                </div>
                : <p className='Loading-tag'>Loading...</p>}
        </div>
    );
}

export default ImageCarousel;
