import { React, useState } from 'react'
import CurrentUserContext from '../../utils/CurrentUserContext';
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({ duck: "duck" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const [isInsideSavedArticles, setIsInsideSavedArticles] = useState(false);
  const [isInsideMain, setIsInsideMain] = useState(false);

  function onArticleSearch() {

  }
  function onSigninClick() {

  }

  function onLogout() {

  }

  function onSavedArticlesClick() {
    setIsInsideSavedArticles(true);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Header
          isLoggedIn={true}
          onSigninClick={onSigninClick}
          onSavedArticlesClick={onSavedArticlesClick}
          insideSavedArticles={true}
          insideMain={true}
          onLogout={onLogout}
        />
        <Main
          onArticleSearch={onArticleSearch}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App