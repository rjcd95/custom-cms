import React, { useEffect, useState } from 'react';
import { FORMSPREE_URL } from 'common/constants';
import Button from 'components/atoms/button';
import FormGroup from 'components/molecules/formGroup';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();

        const response = await fetch(FORMSPREE_URL, {
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
    useEffect(() => {
        if (!submitted) {
            setName('');
            setEmail('');
            setMessage('');
        }
    }, [submitted]);

    return (
        <div className='container'>
            <div className='contact-form'>
                <h1>Contact Page</h1>
                {submitted ? (
                    <div>
                        <h2>Thank you for your message!</h2>
                        <p className='about__text'>
                            Do you want to try again? No problem! Click the button below
                        </p>
                        <Button classes="submit" type="submit" text='Try Again' onClick={() => setSubmitted(false)}></Button>
                    </div>
                ) : (
                    <div>
                        <p className='about__text'>
                            This is a contact page implemented with formspree :) You can try it and I will receive your message
                        </p>
                        <form onSubmit={handleSubmit}>
                            <FormGroup
                                title='Name'
                                classes='contact-form__form-group'
                                type='text'
                                name='title'
                                value={name}
                                onChange={setName}
                                isRequired={true}
                            />
                            <FormGroup
                                title='Email'
                                classes='contact-form__form-group'
                                type='email'
                                name='email'
                                value={email}
                                onChange={setEmail}
                                isRequired={true}
                            />
                            <FormGroup
                                title='Message'
                                classes='contact-form__form-group'
                                type='textarea'
                                value={message}
                                name='message'
                                onChange={setMessage}
                                isRequired={true}
                            />
                            <div className="contact-form__buttons">
                                <Button classes="submit" type="submit" text='Send Message'></Button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
