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
  const [cards, setCards] = useState([
    {
      "_id": "638c9a5cccdc771d93f229c0",
      "keyword": "keyword8",
      "title": "title8",
      "text": "text5",
      "date": "date5",
      "source": "source",
      "link": "https://vb3bhb.com",
      "image": "https://vb3bhb.com",
      "owner": "63885fc54c95267b1ed22007",
      "__v": 0
    },
    {
      "_id": "638db088ec78557255adc4c5",
      "keyword": "keyword82",
      "title": "title8",
      "text": "text5",
      "date": "date5",
      "source": "source",
      "link": "https://vb3bhb.com",
      "image": "https://vb3bhb.com",
      "owner": "638d97840da314b1cb765151",
      "__v": 0
    },
    {
      "_id": "638db146ec78557255adc4ce",
      "keyword": "keyword92",
      "title": "title7",
      "text": "text5",
      "date": "date5",
      "source": "source",
      "link": "https://vb3bhb.com",
      "image": "https://vb3bhb.com",
      "owner": "638db0c6ec78557255adc4c9",
      "__v": 0
    }]);



  const [isInsideSavedArticles, setIsInsideSavedArticles] = useState(false);
  const [isInsideMain, setIsInsideMain] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  

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
        <Switch>
          <Route path='/'>
        <Main
          onArticleSearch={onArticleSearch}
          cards={cards}
          isSearching={isSearching}
        />
        </Route>
        <Route path='/saved-news'>
          
        </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;