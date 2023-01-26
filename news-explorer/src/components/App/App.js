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
import NewsApi from '../../utils/NewsApi';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({ duck: 'duck' });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isInsideSavedArticles, setIsInsideSavedArticles] = useState(false);
  const [isInsideMain, setIsInsideMain] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFound, setIsFound] = useState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [inputsErrors, setInputsErrors] = useState([]);
  const [submitError, setSubmitError] = useState('');
  const [isShowMoreActive, setIsShowMoreActive] = useState(true);


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

  const [newsApiRecivedCards, setNewsApiRecivedCards] = useState();


  const [renderedCards, setRenderedCards] = useState();

  const [savedCards, setSavedCards] = useState([]);



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

  function onArticleSearch(question) {
    setRenderedCards();
    setIsSearching(true);
    setIsLoading(true);
    setIsShowMoreActive(true);
    return NewsApi.getArticles(question)
      .then(res => {
        if (res.articles) {
          setIsLoading(false);
          setRenderedCards(res.articles.splice(0, 3));
          console.log(res.articles);
          setNewsApiRecivedCards(res.articles);
        }
        else {
          setIsLoading(false);
          setIsFound(false);
        }
      });
  }
  const namesOfMonthes = {
    'January': '01',
    'February': '02',
    'March': '03',
    'April': '04',
    'May': '05',
    'June': '06',
    'July': '07',
    'August': '08',
    'September': '09',
    'October': '10',
    'November': '11',
    'December': '12'
  };
  function convertDataToDate(date) {
    const year = date.substr(0, 4);
    const month = date.substr(5, 2);
    let day = date.substr(8, 2);
    let monthName = '';
    Object.values(namesOfMonthes).map((monthNumber, i) => {
      if (month === monthNumber) {
        return monthName = Object.keys(namesOfMonthes)[i];
      }
    })
    if (day.charAt(0) === '0') {
      day = day.substr(1, 1);
    }
    return `${monthName} ${day}, ${year}`;
  }

  function showMoreCards() {
    setRenderedCards([...renderedCards, ...newsApiRecivedCards.splice(0, 3)]);
    setNewsApiRecivedCards(newsApiRecivedCards);
    if (newsApiRecivedCards.length === 0) {
      setIsShowMoreActive(false);
    }
  }

  const cardFunctions = {
    dateConvert: convertDataToDate,
    showMoreCards: showMoreCards,
    isShowMoreActive: isShowMoreActive
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
              cards={renderedCards}
              cardFunctions={cardFunctions}
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
