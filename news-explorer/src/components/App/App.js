import { React, useState } from 'react'
import CurrentUserContext from '../../utils/CurrentUserContext';
import Header from '../Header/Header'
import { Route, Switch, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({duck: "duck"});
  
  const [isInsideSavedArticles, setIsInsideSavedArticles] = useState(false);

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
          onSigninClick={onSigninClick}
          onSavedArticlesClick={onSavedArticlesClick}
          insideSavedArticles={isInsideSavedArticles}
          onLogout={onLogout}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App