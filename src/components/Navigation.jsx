import React, { useState } from 'react';
import "./Navigation.css"
import Logo from "../assets/images/logo.png"
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
        setShowMenu(false);
    };
    return (
        <div className="navbar-container">
            <div className="navbar__logo">
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                    <img src={Logo} alt="" />
                </NavLink>

            </div>

            <button className="navbar__toggle" onClick={handleToggle}>
                {showMenu ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`phone-nav ${showMenu ? 'show' : ''}`}>
                <div className="nav__content bd-grid">
                    <div className="nav__menu">
                        <ul>
                            <li className="nav__item">
                                <NavLink to="/" className="nav__link" onClick={handleLinkClick}>
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink to="/people" className="nav__link" onClick={handleLinkClick}>
                                    People
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/publications" className="nav__link" onClick={handleLinkClick}>
                                Publications
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/gallery" className="nav__link" onClick={handleLinkClick}>
                                Gallery
                                </NavLink>
                            </li>




                            {/* <li className="nav__item dropdown">
                                <div className="dropdown__link">
                                    <NavLink to="/publications" className="nav__link" onClick={handleLinkClick}>
                                        Publications <i className="bx bx-chevron-down dropdown__icon"></i>
                                    </NavLink>
                                </div>
                                <ul className="dropdown__menu">

                                    <li className="dropdown__item">
                                        <NavLink to="/publications/journal-articles" className="nav__link" onClick={handleLinkClick}>
                                            Journal Articles
                                        </NavLink>
                                    </li>
                                    
                                    <li className="dropdown__item">
                                        <NavLink to="/publications/invited-papers" className="nav__link" onClick={handleLinkClick}>
                                            Invited papers in published conference
                                        </NavLink>
                                    </li>
                                </ul>
                            </li> */}


                            <li className="nav__item">
                                <NavLink to="/contact" className="nav__link" onClick={handleLinkClick}>
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navigation
