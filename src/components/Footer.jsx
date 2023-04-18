import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import logo from "../assets/images/IITGN Logo-Trans.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 ">
            
          </div>
          <div className="footer-content pt-5 pb-1">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <img src={logo} className="img-fluid" alt="logo" />
                  </div>
                  <div className="footer-text">
                    <p>Indian Institute of Technology Gandhinagar, Palaj, Gandhinagar, Gujarat, PIN - 382355. </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                    <li><a href='https://iitgn.ac.in/' target="_blank" rel="noreferrer">IITGN</a></li>
                    <li><Link to="/people" onClick={() => window.scrollTo(0, 0)}>People</Link></li>
                    <li><Link to="/publications" onClick={() => window.scrollTo(0, 0)}>Publications</Link></li>
                    <li><Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link></li>
                    <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button><i className="fab fa-telegram-plane"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2023, All Right Reserved <Link to="/" onClick={() => window.scrollTo(0, 0)}>Pankaj Khanna</Link></p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer