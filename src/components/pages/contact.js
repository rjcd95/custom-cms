import React, { useState } from 'react';

const Contact = () => {
    const formspreeUrl = "https://formspree.io/f/xbjeazwq";
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();

        const response = await fetch(formspreeUrl, {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                message
            }),
            headers: {
            Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
  
        if (response.status === 200) {
          setSubmitted(true);
        }
    };
    return (
        <div className='container'>
            <div className='contact-form'>
                <h1>Contact Page</h1>
                {submitted ? (
                    <div>
                        <h2>Thank you for your message!</h2>
                        <p className='about__text'>
                            Reload the page if you want to send another message :) 
                        </p>
                    </div>
                ) : (
                    <div>
                        <p className='about__text'>
                            This is a contact page implemented with formspree :) You can try it and I will receive your message
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="post-form__form-group">
                                <label htmlFor="title">Name:</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="post-form__form-group">
                                <label htmlFor="title">Email:</label>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="post-form__form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="body" name="body" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                            </div>
                            <div className="contact-form__buttons">
                                <button className="contact-form__buttons--submit" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
