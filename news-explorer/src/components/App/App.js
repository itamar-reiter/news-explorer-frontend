import { React, useState } from 'react'
import CurrentUserContext from '../../utils/CurrentUserContext';
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch, useHistory } from "react-router-dom";
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

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
      "image": "../../images/itamar-profile-image.jpg",
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
      "image": "../../images/itamar-profile-image.jpg",
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
      "image": "../../images/itamar-profile-image.jpg",
      "owner": "638db0c6ec78557255adc4c9",
      "__v": 0
    }]);

  const [savedCards, setSavedCards] = useState([
    {
      "_id": "638c9a5cccdc771d93f229c0",
      "keyword": "keyword8",
      "title": "title8",
      "text": "text5",
      "date": "date5",
      "source": "source",
      "link": "https://vb3bhb.com",
      "image": "../../images/itamar-profile-image.jpg",
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
      "image": "../../images/itamar-profile-image.jpg",
      "link": "https://vb3bhb.com",
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
      "image": "../../images/itamar-profile-image.jpg",
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
        <Switch>
          <Route exact path='/'>
            <Header
              isLoggedIn={false}
              onSigninClick={onSigninClick}
              onSavedArticlesClick={onSavedArticlesClick}
              insideSavedArticles={false}
              onLogout={onLogout}
            />
            <Main
            isLoggedIn={isLoggedIn}
              onArticleSearch={onArticleSearch}
              cards={cards}
              isSearching={true}
            />
          </Route>
          <Route path='/saved-news'>
            <SavedNewsHeader
            onSigninClick={onSigninClick}
            onSavedArticlesClick={onSavedArticlesClick}
            isInsideSavedArticles={isInsideSavedArticles}
            onLogout={onLogout}
            />
            <SavedNews
              isInsideSavedArticles={isInsideSavedArticles}
              cards={savedCards}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;