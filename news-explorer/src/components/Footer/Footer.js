import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyrights'>© 2022, Powered by itamar Reiter</p>
      <Link to={'/'} className='footer__link'>Home</Link>
      <Link to={'/'} className='footer__link'>Practicum</Link>
      <Link to={'/'} className='footer__icon footer__icon_type_github'></Link>
      <Link to={'/'} className='footer__icon footer__icon_type_facebook'></Link>
    </footer>
  )
}

export default Footer