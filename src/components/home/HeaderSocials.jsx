import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/paulodiaz13' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/paulocesardiaz' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://wwww.facebook.com/paulo.solarte' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://twitter.com/PaulCesarDiaz' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

/*
<a href='https://dev.to/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a>

<a href='https://hashnode.com/' className='home__social-link' target='_blank' rel='noreferrer'>
<SiHashnode />
</a>*/


export default HeaderSocials;
