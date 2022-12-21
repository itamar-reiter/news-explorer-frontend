import React, { useContext } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';
import { Route, Link } from 'react-router-dom'
import './Navigation.css';


function Navigation({
  isLoggedIn,
  onSavedArticlesClick,
  insideSavedArticles,
  insideMain,
  onSigninClick,
  onLogout
}) {
  const currentUserValue = useContext(CurrentUserContext);
  let renderedNavbar = null;
  renderedNavbar =
    isLoggedIn ?
      <>
        <Link to={'/saved-news'} onClick={onSavedArticlesClick} className={`navigation__path navigation__path_type_saved-articles ${insideSavedArticles ? "navigation__path_decorated_saved-news navigation__path_in-saved-news" : ''}`}>Saved articles</Link>
        <Link to={'/'} onClick={onLogout} className={`navigation__button navigation__button_logged-in ${insideSavedArticles ? 'navigation__button_in-saved-news' : ''}`}>
          <p>{currentUserValue.duck}</p>
          <div className={`navigation__exit-icon ${insideSavedArticles ? 'navigation__exit-icon_in-saved-news' : ''}`}></div>
        </Link>
      </>
      : <div onClick={onSigninClick} className='navigation__button'>
        <p>Sign in</p>
      </div>

  return (
    <nav className={`navigation ${insideSavedArticles ? 'navigation_in-saved-news' : ''}`}>
      <Link to={'/'} className={`navigation__path navigation__path_type_home ${insideMain ? "navigation__path_decorated_main" : 'navigation__path_in-saved-news'}`}>Home</Link>
      {renderedNavbar}
    </nav>
  )
}

export default Navigation;