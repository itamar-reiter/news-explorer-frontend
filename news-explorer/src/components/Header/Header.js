import { Link } from 'react-router-dom'
import './Header.css'
import { React, useContext } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';
import Navigation from '../Navigation/Navigation';



export default function Header({
  isLoggedIn,
  onSavedArticlesClick,
  insideMain,
  insideSavedArticles,
  onSigninClick,
  onLogout
}) {
  const currentUserValue = useContext(CurrentUserContext);

  return (
    <header className={`header ${insideSavedArticles ? "header_in-saved-news" : ""}`}>
      <Link to={'/'} className={`header__logo ${insideSavedArticles ? "header__logo_in-saved-news" : ""}`}>NewsExplorer</Link>
      <Navigation
        isLoggedIn={isLoggedIn}
        onSavedArticlesClick={onSavedArticlesClick}
        insideMain={insideMain}
        insideSavedArticles={insideSavedArticles}
        onSigninClick={onSigninClick}
        onLogout={onLogout}
      />
    </header>
  );
}


