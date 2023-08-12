import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow, FaTwitter, FaGoogle, FaPhone } from 'react-icons/fa';
import './hello.styles.scss';
import helloGif from '../../assets/hello.gif';


const Hello = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // send message
    }

    return (
        <div className="contact">
            <div className='left'>
                <div className='profile-links'>
                    <a href="https://www.linkedin.com/in/yourprofile"><FaLinkedin /></a>
                    <a href="https://github.com/yourprofile"><FaGithub /></a>
                    <a href="https://stackoverflow.com/users/yourprofile"><FaStackOverflow /></a>
                    <a href="https://twitter.com/yourprofile"><FaTwitter /></a>
                    <a href="mailto:youremail@gmail.com"><FaGoogle /></a>
                    <a href="tel:+1234567890"><FaPhone /></a>
                </div>

                <form onSubmit={handleSubmit} className='message-form '>
                    <textarea
                        className='message-input'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <button className='submit-button' type="submit">Send Message</button>
                </form>
            </div>
            <div className='right'>
                <img className="helloImg" src={helloGif} />
            </div>
        </div>
    );
}

export default Hello;