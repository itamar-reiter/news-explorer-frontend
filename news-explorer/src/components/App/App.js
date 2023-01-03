import { React, useState } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch, useHistory } from 'react-router-dom';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PopupFormInput from '../PopupFormInput/PopupFormInput';
import SigninPopup from '../SigninPopup/SigninPopup';
import SignupPopup from '../SignupPopup/SignupPopup';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({ duck: 'duck' });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isInsideSavedArticles, setIsInsideSavedArticles] = useState(false);
  const [isInsideMain, setIsInsideMain] = useState(false);
  const [isSearching, setIsSearching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isFound, setIsFound] = useState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputsErrors, setInputsErrors] = useState([]);

  const editInputsErrors = (isError, inputName) => {
    let tempErrorsArray = inputsErrors;
    tempErrorsArray = tempErrorsArray.filter((name) => name !== inputName);
    if (isError) {
      tempErrorsArray.push(inputName);
    }
    setInputsErrors(tempErrorsArray);
    console.log(inputsErrors);
  };

  const toggleIsFormValidState = () => {
    setIsFormValid(!isFormValid);
  };

  const [cards, setCards] = useState([
    {
      _id: '638c9a5cccdc771d93f229c0',
      keyword: 'keyword8',
      title: 'title8',
      text: 'text5',
      date: 'date5',
      source: 'source',
      link: 'https://vb3bhb.com',
      image: '../../images/itamar-profile-image.jpg',
      owner: '63885fc54c95267b1ed22007',
      __v: 0,
    },
    {
      _id: '638db088ec78557255adc4c5',
      keyword: 'keyword82',
      title: 'title8',
      text: 'text5',
      date: 'date5',
      source: 'source',
      link: 'https://vb3bhb.com',
      image: '../../images/itamar-profile-image.jpg',
      owner: '638d97840da314b1cb765151',
      __v: 0,
    },
    {
      _id: '638db146ec78557255adc4ce',
      keyword: 'keyword92',
      title: 'title7',
      text: 'text5',
      date: 'date5',
      source: 'source',
      link: 'https://vb3bhb.com',
      image: '../../images/itamar-profile-image.jpg',
      owner: '638db0c6ec78557255adc4c9',
      __v: 0,
    }]);

  const [savedCards, setSavedCards] = useState([
    {
      _id: '638c9a5cccdc771d93f229c0',
      keyword: 'keyword8',
      title: 'title8',
      text: 'text5',
      date: 'date5',
      source: 'source',
      link: 'https://vb3bhb.com',
      image: '../../images/itamar-profile-image.jpg',
      owner: '63885fc54c95267b1ed22007',
      __v: 0,
    },
    {
      _id: '638c9a5cccdc771d93f229c0',
      keyword: 'keyword8',
      title: 'title8',
      text: 'text5',
      date: 'date5',
      source: 'source',
      link: 'https://vb3bhb.com',
      image: '../../images/itamar-profile-image.jpg',
      owner: '63885fc54c95267b1ed22007',
      __v: 0,
    },
    {
      _id: '638c9a5cccdc771d93f229c0',
      keyword: 'keyword8',
      title: 'title8',
      text: 'text5',
      date: 'date5',
      source: 'source',
      link: 'https://vb3bhb.com',
      image: '../../images/itamar-profile-image.jpg',
      owner: '63885fc54c95267b1ed22007',
      __v: 0,
    },
    {
      _id: '638c9a5cccdc771d93f229c0',
      keyword: 'keyword8',
      title: 'title8',
      text: 'text5',
      date: 'date5',
      source: 'source',
      link: 'https://vb3bhb.com',
      image: '../../images/itamar-profile-image.jpg',
      owner: '63885fc54c95267b1ed22007',
      __v: 0,
    },
    {
      _id: '638c9a5cccdc771d93f229c0',
      keyword: 'keyword8',
      title: 'title8',
      text: 'text5',
      date: 'date5',
      source: 'source',
      link: 'https://vb3bhb.com',
      image: '../../images/itamar-profile-image.jpg',
      owner: '63885fc54c95267b1ed22007',
      __v: 0,
    },
    {
      _id: '638db088ec78557255adc4c5',
      keyword: 'keyword82',
      title: 'title8',
      text: 'text5',
      date: 'date5',
      source: 'source',
      image: '../../images/itamar-profile-image.jpg',
      link: 'https://vb3bhb.com',
      owner: '638d97840da314b1cb765151',
      __v: 0,
    },
    {
      _id: '638db146ec78557255adc4ce',
      keyword: 'keyword92',
      title: 'title7',
      text: 'text5',
      date: 'date5',
      source: 'source',
      link: 'https://vb3bhb.com',
      image: '../../images/itamar-profile-image.jpg',
      owner: '638db0c6ec78557255adc4c9',
      __v: 0,
    }]);

  const [isPopupSigninOpen, setIsPopupSigninOpen] = useState(false);
  const [isPopupSignupOpen, setIsPopupSignupOpen] = useState(false);

  function toggleSigninPopupState() {
    setIsPopupSigninOpen(!isPopupSigninOpen);
  }

  function toggleSignupPopupState() {
    setIsPopupSignupOpen(!isPopupSignupOpen);
  }

  const handleEscPress = (evt) => {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  };

  function closeAllPopups() {
    setIsPopupSigninOpen(false);
    setIsPopupSignupOpen(false);
  }

  function onSigninSubmit() {
    setIsSubmiting(true);
    setIsLoggedIn(true);
    closeAllPopups();
    setIsSubmiting(false);
  }

  function onSignupSubmit() {
    setIsSubmiting(true);
    closeAllPopups();
    setIsSubmiting(false);
  }

  function onRelativeSignupClick() {
    closeAllPopups();
    toggleSignupPopupState();
  }

  function onRelativeSigninClick() {
    closeAllPopups();
    toggleSigninPopupState();
  }

  function onArticleSearch() {

  }
  function onSigninClick() {
    toggleSigninPopupState();
  }

  function onLogout() {
    setIsLoggedIn(false);
  }

  function onSavedArticlesClick() {
    setIsInsideSavedArticles(true);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div
        className="app"
        tabIndex={0}
        onKeyDown={handleEscPress}
      >
        <Switch>
          <Route exact path="/">
            <Header
              isLoggedIn={isLoggedIn}
              onSigninClick={onSigninClick}
              onSavedArticlesClick={onSavedArticlesClick}
              insideSavedArticles={false}
              onLogout={onLogout}
            />
            <Main
              isLoggedIn={isLoggedIn}
              isInsideMain
              isInsideSavedArticles={false}
              onArticleSearch={onArticleSearch}
              cards={cards}
              isSearching={isSearching}
              isLoading={isLoading}
              isFound={isFound}
            />
          </Route>
          <Route path="/saved-news">
            <SavedNewsHeader
              onSigninClick={onSigninClick}
              onSavedArticlesClick={onSavedArticlesClick}
              isInsideSavedArticles
              onLogout={onLogout}
            />
            <SavedNews
              isLoggedIn
              isInsideMain={false}
              isInsideSavedArticles
              savedCards={savedCards}
            />
          </Route>
        </Switch>
        <Footer />
        <SigninPopup
          isPopupOpen={isPopupSigninOpen}
          onSubmit={onSigninSubmit}
          onRelativePathClick={onRelativeSignupClick}
          inputsErrors={inputsErrors}
          editInputsErrors={editInputsErrors}
          onClose={closeAllPopups}
        />
        <SignupPopup
          isPopupOpen={isPopupSignupOpen}
          onSubmit={onSignupSubmit}
          editInputsErrors={editInputsErrors}
          inputsErrors={inputsErrors}
          onRelativePathClick={onRelativeSigninClick}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
