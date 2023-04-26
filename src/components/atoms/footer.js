import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isFixedFooter = location.pathname !== '/';
    return (
        <footer className={`footer ${isFixedFooter ? 'fixed' : ''}`}>
            <div className="footer__container">
                <p>&copy; 2023 My Personal Blog. All Rights Reserved.</p>
            </div>
        </footer>
    )
};

export default Footer;
