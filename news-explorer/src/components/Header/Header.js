import { Route, Routes, Link } from 'react-router-dom'
import './Header.css'
import { React } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';

function Header({
  onSavedArticlesClick,
  insideSavedArticles,
  onSigninClick,
  onLogout
}) 

{
const loggedInElement = <>
<Link to={'/saved-news'} onClick={onSavedArticlesClick} className="header__path">Saved articles</Link>
<Link to={'/logged-out'} onClick={onLogout} className='header__button'>{CurrentUserContext}</Link>
</>
  return (
    <header className={`header ${insideSavedArticles ? "header_type_white-background" : ""}`}>
      <nav className="header__navbar">
        <Link to={'/'} className="header__logo" />
        <Link to={'/'} className="header__path">Home</Link>
        <Routes>
          {/* when logged in */}
          <Route path='/' element={loggedInElement}
  />
          {/* when logged out */}
          <Route path='/logged-out' element={
            <p onClick={onSigninClick} className='header__button'>Sign in</p>
          }
          />
          </Routes>
      </nav>
    </header>
  )
}

export default Header