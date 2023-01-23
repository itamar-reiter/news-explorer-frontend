import { Link } from 'react-router-dom';
import './SavedNewsHeader.css';
import { React, useContext } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';
import Navigation from '../Navigation/Navigation';

export default function SavedNewsHeader({
  isMobileNavigationActive,
  onMobileNavigationButtonClick,
  onSavedArticlesClick,
  isInsideSavedArticles,
  onSigninClick,
  onLogout,
}) {
  const currentUserValue = useContext(CurrentUserContext);

  return (
    <header className="header header_type_in-saved-news">
      <Link to="/" className="header__logo header__logo_type_in-saved-news">NewsExplorer</Link>
      <Navigation
        isLoggedIn
        isActive={isMobileNavigationActive}
        onSavedArticlesClick={onSavedArticlesClick}
        insideMain={false}
        insideSavedArticles={isInsideSavedArticles}
        onSigninClick={onSigninClick}
        onLogout={onLogout}
      />
      <button 
      onClick={onMobileNavigationButtonClick}
      className={`header__nav-button header__nav-button_type_in-saved-news ${isMobileNavigationActive? 'header__nav-button_mode_saved-news-esc-mode' : ''}`}
      />
    </header>
  );
}
