import { Route, Link } from 'react-router-dom'
import './Header.css'
import { React, useContext } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';



export default function Header({
  isLoggedIn,
  onSavedArticlesClick,
  insideMain,
  insideSavedArticles,
  onSigninClick,
  onLogout
}) {
  const currentUserValue = useContext(CurrentUserContext);

  const loggedinHeaderNav = () => {
    return (<>
      <Link to={'/saved-news'} onClick={onSavedArticlesClick} className={`header__path ${insideSavedArticles? "header__path_decorated" : ''}`}>Saved articles</Link>
      <Link to={'/'} onClick={onLogout} className='header__button'>{currentUserValue.duck}</Link>
    </>
    )
  }
  
  const notLoggedinHeaderNav = () => {
    return (
      <p onClick={onSigninClick} className='header__button'>Sign in</p>
    )
  }
  return (
    <header className={`header ${insideSavedArticles ? "header_type_white-background" : ""}`}>
      <Link to={'/'} className="header__logo">NewsExplorer</Link>
      <nav className="header__navbar">
        <Link to={'/'} className={`header__path ${insideMain? "header__path_decorated" : ''}`}>Home</Link>
          {isLoggedIn ? <loggedinHeaderNav/> :<notLoggedinHeaderNav/>}
      </nav>
    </header>
  );
}


