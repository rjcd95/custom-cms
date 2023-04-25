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
            <div className='contact'>
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
                            <label>
                                Name*
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                            </label>
                            <label>
                                Email*
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </label>
                            <label>
                                Message*
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                            </label>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
