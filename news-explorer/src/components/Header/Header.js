import { Route, Link } from 'react-router-dom'
import './Header.css'
import { React, useContext } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';

export default function Header({
  onSavedArticlesClick,
  insideSavedArticles,
  onSigninClick,
  onLogout
}) {
  const currentUserValue = useContext(CurrentUserContext);
  return (
    <header className={`header ${insideSavedArticles ? "header_type_white-background" : ""}`}>
      <Link to={'/'} className="header__logo" />
      <nav className="header__navbar">
        <Link to={'/'} className="header__path">Home</Link>
        <Route path='/'>
          <Link to={'/saved-news'} onClick={onSavedArticlesClick} className="header__path">Saved articles</Link>
          <Link to={'/logged-out'} onClick={onLogout} className='header__button'>{currentUserValue.duck}</Link>
        </Route>
        <Route path='/logged-out'>
          <p onClick={onSigninClick} className='header__button'>Sign in</p>
        </Route>
      </nav>
    </header>
  );
}


