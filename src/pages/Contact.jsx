import React from 'react'
import { Helmet } from "react-helmet";
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="#" />
            </Helmet>
            <header id="page-header">
                <div className="page-banner-content">
                    <h1>Contact Us</h1>
                </div>
            </header>

            <div className="section-heading">
                    <h1>Get in Touch</h1>
                </div>


                <div className="page-section">
                

                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-details">
                            <p>If you have any questions or inquiries, please feel free to contact us.</p>
                        <p><strong>Office:</strong> 5/336 A<br/> Indian Institute of Technology Gandhinagar, Palaj, Gandhinagar, Gujarat, PIN - 382355.</p>
                        <p><strong>Email:</strong><a href='mailto:pankaj.khanna@iitgn.ac.in'> pankaj.khanna@iitgn.ac.in</a></p>

                            </div>

                        </div>
                        <div className="col-md-6">
                            <ContactForm />
                        </div>
                    </div>
                    

                </div>



            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14667.478266399208!2d72.6842489!3d23.2114236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2adec1f16d8d%3A0xdc447b8706689bc3!2sIndian%20Institute%20Of%20Technology%20Gandhinagar%20(IIT%20Gandhinagar)!5e0!3m2!1sen!2sin!4v1681835918420!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex={0}
        referrerPolicy="no-referrer-when-downgrade" title='Google Map'>
      </iframe> */}
        </>

    )
}

export default Contact