import { React, useState, useEffect } from 'react';
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
import MainApi from '../../utils/MainApi';

function App() {
  const history = useHistory();
  
  const [token, setToken] = useState();


  //Effect for token verification and auto login when rendering app
  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
    if (token) {
      MainApi.checkToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            history.push('/');
          }
          else {
            localStorage.removeItem("jwt");
          }
        }).catch((err) => {
          console.log(err);
        });
    }
  }, [token, history]);


  // assign user values and get saved cards from the server
  useEffect(() => {
    if (token) {
      console.log(token);
      MainApi.getInitialAppInfo(token)
        .then(([userInfo, savedCardsData]) => {
          console.log(userInfo);
          setCurrentUser(userInfo);
          setSavedCards(savedCardsData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);


  const [currentUser, setCurrentUser] = useState({});
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
  const [cardKeyword, setCardKeyword] = useState('');
  const [keywordsCollection, setKeywordsCollection] = useState([]);




  const editInputsErrors = (isError, inputName) => {
    let tempErrorsArray = inputsErrors;
    tempErrorsArray = tempErrorsArray.filter((name) => name !== inputName);
    if (isError) {
      tempErrorsArray.push(inputName);
    }
    setInputsErrors(tempErrorsArray);
  };

  const onRegister = (email, password, name) => {
    MainApi.register(email, password, name)
      .then((res) => {
        if (res._id) {
          console.log(res);
          closeAllPopups();
          toggleSuccessRegisterPopupState();
        }
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Error: 409') {
          console.log('email is exist');
        }
      });
  }

  function onLogin(email, password) {
    setSubmitError('');
    MainApi.login(email, password)
      .then((res => {
        if (res.token) {
          console.log(res);
          localStorage.setItem("jwt", res.token);
          setToken(localStorage.getItem("jwt"));
          setIsLoggedIn(true);
          closeAllPopups();
        }
      }
      ))
      .catch(err => {
        if (err === 'Error: 401') {

        }
        setSubmitError('Email or password are incorrect. Please try again.');
      });
  }
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



  function onRelativeSignupClick() {
    closeAllPopups();
    toggleSignupPopupState();
  }

  function onRelativeSigninClick() {
    closeAllPopups();
    toggleSigninPopupState();
  }

  function onArticleSearch(question) {
    setCardKeyword(question);
    setKeywordsCollection([...keywordsCollection, cardKeyword]);
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

  function onSaveCard(card) {
    setSavedCards([...savedCards, card]);
  }

  function onDeleteCard() {

  }

  const cardFunctions = {
    dateConvert: convertDataToDate,
    showMoreCards: showMoreCards,
    isShowMoreActive: isShowMoreActive,
    onSaveClick: onSaveCard,
    keyword: cardKeyword,
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
              cardFunctions={cardFunctions}
            />
          </Route>
        </Switch>
        <Footer />
        <SigninPopup
          isPopupOpen={isPopupSigninOpen}
          onSubmit={onLogin}
          onRelativePathClick={onRelativeSignupClick}
          inputsErrors={inputsErrors}
          submitError={submitError}
          editInputsErrors={editInputsErrors}
          onClose={closeAllPopups}
        />
        <SignupPopup
          isPopupOpen={isPopupSignupOpen}
          onSubmit={onRegister}
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
