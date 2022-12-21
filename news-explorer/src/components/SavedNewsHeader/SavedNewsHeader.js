import { Link } from 'react-router-dom'
import './SavedNewsHeader.css'
import { React, useContext } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';
import Navigation from '../Navigation/Navigation';



export default function SavedNewsHeader({
  onSavedArticlesClick,
  insideSavedArticles,
  onSigninClick,
  onLogout
}) {
  const currentUserValue = useContext(CurrentUserContext);

  return (
    <header className="header_in-saved-news">
      <Link to={'/'} className="header__logo_in-saved-news">NewsExplorer</Link>
      <Navigation
        isLoggedIn={true}
        onSavedArticlesClick={onSavedArticlesClick}
        insideMain={false}
        insideSavedArticles={true}
        onSigninClick={onSigninClick}
        onLogout={onLogout}
      />
    </header>
  );
}


