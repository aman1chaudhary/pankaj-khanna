import React, { useState } from 'react';

const ContactForm = () => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwc5IdvlmFZ49J9x1wMbn41uz3K-1wN8ZcbTul5V07LAf6RUV4jznT4GdWRieIJEkEkAA/exec';

    //Response Sheet: https://docs.google.com/spreadsheets/d/1S9rQEAdxt7k7P_ik59INWZS0bSUC94gbjTHc0d1Fik0/edit#gid=0

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await fetch(scriptURL, { method: 'POST', body: new FormData(e.target) });
            setMessage('Your Response has been sent successfully!');
            setTimeout(() => {
                setMessage('');
            }, 4000);
            e.target.reset();
        } catch (error) {
            console.error('Error!', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form name="submit-to-google-sheet" className="contact-us-form" data-form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" className="form-control" name="Name" required /> <br />
                <input type="text" placeholder="Your Email" className="form-control" name="Email" required /><br />
                <input type="text" placeholder="Subject" className="form-control" name="Subject" required /><br />
                <textarea placeholder="Type your message here..." className="form-control" rows="9" name="Message"
                    required></textarea><br />
                <button className="submit-button" type="submit" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send message'}
                </button>

            </form>
            <span id="message" className="success-message">{message}</span>
        </div>
    )
}

export default ContactForm