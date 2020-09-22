import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <p>© 2020 Gustavo Pereira</p>
            <div className="social">
                <a href="https://www.linkedin.com/in/gustavo-nogueira-pereira-2a230259/" target="_blank"><LinkedInIcon className="linkTo" alt="LinkedIn url"/></a>
                <a href="https://github.com/gustavonp" target="_blank"><GitHubIcon className="linkTo" alt="GitHub url" /></a>
            </div>
        </footer>
    );
}

export default Footer;