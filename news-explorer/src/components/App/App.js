import { React, useState } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch, useHistory } from 'react-router-dom';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SigninPopup from '../SigninPopup/SigninPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import SuccessRegisterPopup from '../SuccessRegisterPopup/SuccessRegisterPopup';

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
  const [inputsErrors, setInputsErrors] = useState([]);
  const [submitError, setSubmitError] = useState('');

  const editInputsErrors = (isError, inputName) => {
    let tempErrorsArray = inputsErrors;
    tempErrorsArray = tempErrorsArray.filter((name) => name !== inputName);
    if (isError) {
      tempErrorsArray.push(inputName);
    }
    setInputsErrors(tempErrorsArray);
    console.log(inputsErrors);
  };
  const [users, setUsers] = useState([
    {
      "_id": {
        "$oid": "638ca212c66d4df0bef7282b"
      },
      "name": "itapita5",
      "email": "ita5@gmail.com",
      "password": "$2a$10$I8agtieiyLAhbyYoT5y12eRgQisiSgqkbya9zULMozuQXq2wV1uBu",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "638ca22f74868725bb1a78e1"
      },
      "name": "itapita6",
      "email": "ita6@gmail.com",
      "password": "$2a$10$pG1ZfUH6IsZNja1o3vDb1OrYMJUDVYNXMPPB0Hr0BuPgO8OOZ/5OS",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "638d97840da314b1cb765151"
      },
      "name": "itapita8",
      "email": "ita8@gmail.com",
      "password": "$2a$10$LOdz.gzL.2Mh4pVKFgu9LefXUoMKW3lP6XO7KS6F0lPZ8xGQgofBS",
      "__v": 0
    }
  ]);

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
  function toggleSigninPopupState() {
    setSubmitError('');
    setIsPopupSigninOpen(!isPopupSigninOpen);
  }

  const [isPopupSignupOpen, setIsPopupSignupOpen] = useState(false);
  function toggleSignupPopupState() {
    setSubmitError('');
    setIsPopupSignupOpen(!isPopupSignupOpen);
  }

  const [isPopupSuccessRegisterOpen, setIsPopupSuccessRegisterOpen] = useState(false);

  function toggleSuccessRegisterPopupState() {
    setIsPopupSuccessRegisterOpen(!isPopupSuccessRegisterOpen);
  }

  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  function toggleMobileNavigationState() {
    setIsMobileNavigationOpen(!isMobileNavigationOpen);
  }

  const handleEscPress = (evt) => {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  };

  function closeAllPopups() {
    setIsPopupSigninOpen(false);
    setIsPopupSignupOpen(false);
    setIsPopupSuccessRegisterOpen(false);
    setIsMobileNavigationOpen(false);
  }

  function onSigninSubmit(email, password) {
    setSubmitError('');
    let userEmail = undefined;
    let userData = undefined;
    users.forEach(user => {
      if (user.email === email) {
        userEmail = user.email;
        if (user.password === password) {
          return userData = user;
        }
      }
    })
    if (userData) {
      setCurrentUser(userData);
      setIsLoggedIn(true);
      closeAllPopups();
    }
    else if (!userEmail) {
      setSubmitError('This email is not available');
    }
    else {
      setSubmitError('wrong Password, please try again');
    }
  }

  function onSignupSubmit() {
    closeAllPopups();
    toggleSuccessRegisterPopupState();
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
    closeAllPopups();
    toggleSigninPopupState();
  }

  function onLogout() {
    closeAllPopups();
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
              isMobileNavigationActive={isMobileNavigationOpen}
              onMobileNavigationButtonClick={toggleMobileNavigationState}
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
              isMobileNavigationActive={isMobileNavigationOpen}
              onMobileNavigationButtonClick={toggleMobileNavigationState}
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
          submitError={submitError}
          editInputsErrors={editInputsErrors}
          onClose={closeAllPopups}
        />
        <SignupPopup
          isPopupOpen={isPopupSignupOpen}
          onSubmit={onSignupSubmit}
          editInputsErrors={editInputsErrors}
          inputsErrors={inputsErrors}
          submitError={submitError}
          onRelativePathClick={onRelativeSigninClick}
          onClose={closeAllPopups}
        />
        <SuccessRegisterPopup
          isPopupOpen={isPopupSuccessRegisterOpen}
          onRelativePathClick={onRelativeSigninClick}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
