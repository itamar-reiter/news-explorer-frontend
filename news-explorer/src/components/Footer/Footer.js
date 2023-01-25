import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyrights">© 2022, Powered by itamar Reiter</p>
      <nav className='footer__navbar'>
        <div className='footer__links'>
          <Link to="/" className="footer__link">Home</Link>
          <a href="https://practicum.com/en-isr/" className="footer__link" target="_blank" rel="noopener noreferrer">Practicum</a>
        </div>
        <div className='footer__icons'>
          <a href="https://github.com/itamar-reiter" className="footer__icon footer__icon_type_github" target="_blank" rel="noopener noreferrer" />
          <a href="/" className="footer__icon footer__icon_type_facebook" target="_blank" rel="noopener noreferrer" />
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
