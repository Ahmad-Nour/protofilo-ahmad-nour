import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow, FaTwitter, FaGoogle, FaPhone ,FaFilePdf} from 'react-icons/fa';
import './hello.styles.scss';
import helloGif from '../../assets/hello.gif';

const Hello = () => {
    const [message, setMessage] = useState('');

    return (
        <div className="contact">
            <div className='left'>
                 <p className='text'>
                    Thank you for your time. If there is anything I can help you with, please feel free to reach out to me.
                </p>
                <div className='profile-links'>
                    <a href="https://www.linkedin.com/in/ahmad-nour-al-sabaggh-51b474183/" target='_blank'><FaLinkedin /></a>
                    <a href="https://github.com/Ahmad-Nour" target='_blank'><FaGithub /></a>
                    <a href="https://stackoverflow.com/users/12200868/ahmad-nour-al-sabaggh" target='_blank'><FaStackOverflow /></a>
                    <a href="https://twitter.com/Ahmadno46483493" target='_blank'><FaTwitter /></a>
                    <a href="mailto:ahmad.nour.alsabaggh@gmail.com" target='_blank'><FaGoogle /></a>
                    <a href="tel:+963949151627" target='_blank'><FaPhone /></a>
                    <a href="tel:+1234567890" target='_blank'><FaFilePdf /></a>
                </div>
            
            </div>
            <div className='right'>
                <img className="helloImg" src={helloGif} />
            </div>
        </div>
    );
}

export default Hello;