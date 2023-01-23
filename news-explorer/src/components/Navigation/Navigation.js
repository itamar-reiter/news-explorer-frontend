import React, { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import CurrentUserContext from '../../utils/CurrentUserContext';
import './Navigation.css';

function Navigation({
  isLoggedIn,
  isActive,
  onSavedArticlesClick,
  insideSavedArticles,
  insideMain,
  onSigninClick,
  onLogout,
}) {
  const currentUserValue = useContext(CurrentUserContext);
  let renderedNavbar = null;
  renderedNavbar = isLoggedIn
    ? (
      <>
        <Link to="/saved-news" onClick={onSavedArticlesClick} className={`navigation__path navigation__path_type_saved-articles ${insideSavedArticles ? 'navigation__path_decorated_saved-news navigation__path_type_in-saved-news' : ''}`}>Saved articles</Link>
        <Link to="/" onClick={onLogout} className={`navigation__button navigation__button_state_logged-in ${insideSavedArticles ? 'navigation__button_type_in-saved-news' : ''}`}>
          <p>{currentUserValue.name}</p>
          <div className={`navigation__exit-icon ${insideSavedArticles ? 'navigation__exit-icon_type_in-saved-news' : ''}`} />
        </Link>
      </>
    )
    : (
      <div onClick={onSigninClick} className="navigation__button">
        <p>Sign in</p>
      </div>
    );

  return (
    <nav className={`navigation ${isActive? 'navigation_active': ''} ${insideSavedArticles ? 'navigation_type_in-saved-news' : ''}`}>
      <Link to="/" className={`navigation__path navigation__path_type_home ${insideMain ? 'navigation__path_decorated_main' : 'navigation__path_type_in-saved-news'}`}>Home</Link>
      {renderedNavbar}
    </nav>
  );
}

export default Navigation;
