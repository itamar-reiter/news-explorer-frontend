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
          <Link to="https://practicum.com/en-isr/" className="footer__link">Practicum</Link>
        </div>
        <div className='footer__icons'>
          <Link to="https://github.com/itamar-reiter" className="footer__icon footer__icon_type_github" />
          <Link to="/" className="footer__icon footer__icon_type_facebook" />
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
