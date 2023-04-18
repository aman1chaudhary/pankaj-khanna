import React from 'react'
import { Helmet } from 'react-helmet';

const Privacy = () => {
    return (
        <div>
            <Helmet>
                <title>Privacy Policy</title>
                <meta name="description" content="#" />
            </Helmet>
            <header id="page-header">
                <div className="page-banner-content">
                    <h1>Privacy Policy</h1>
                </div>

            </header>
            <div className="main-container">
                <div className="privacy-content">
                    <p>We take privacy seriously and are committed to protecting the personal information of our users.</p>

                    <p><strong>Information Collection and Use:</strong> We collect personal information from our website visitors when they fill out a form, or register for an event. The personal information that we may collect includes your name, email address, and phone number. We use this information to send you updates and information about our research lab, including event invitations, and other relevant information. We may also use this information to contact you directly.</p>

                    <p><strong>Data Security:</strong> We take all reasonable measures to protect the personal information that we collect from our website visitors. This includes using secure servers and encryption technologies to safeguard your information.</p>

                    <p><strong>Changes to Privacy Policy: </strong>We reserve the right to modify this Privacy Policy at any time. We will notify our website visitors of any changes to our Privacy Policy by posting the revised policy on our website. Your continued use of our website after any such changes are made constitutes your acceptance of the new Privacy Policy.</p>

                </div>

            </div>
        </div>
    )
}

export default Privacy