import { React, useState, useEffect, useCallback } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes, useNavigate, Navigate, Router, useFetcher } from 'react-router-dom';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SigninPopup from '../SigninPopup/SigninPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import SuccessRegisterPopup from '../SuccessRegisterPopup/SuccessRegisterPopup';
import NewsApi from '../../utils/NewsApi';
import MainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { namesOfMonthes } from '../../utils/constants';
// import ContentLoader from '../ContentLoader/ContentLoader';

function App() {
  const navigate = useNavigate();

  const [token, setToken] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [keywordsCollection, setKeywordsCollection] = useState([]);

  const [isDirectedToSavedNewsRoute, setisDirectedToSavedNewsRoute] = useState(false);
  const [isPopupSigninOpen, setIsPopupSigninOpen] = useState(false);
  const [isFooterDisplayed, setIsFooterDisplayed] = useState(false);

  //insurance that footer is displayed only after page is loaded
  const handleNavigation = useCallback((route) => {
    navigate(route);
    setIsFooterDisplayed(true);
    console.log("in handleNavigation");
  }, [navigate]);

  //Effect for token verification and auto login when rendering app
  useEffect(() => {
    setIsFooterDisplayed(false);
    setToken(localStorage.getItem("jwt"));
    if (token) {
      // if there is a token in local storage, check it
      // if it is valid, get user info and saved cards
      // if it is not valid, remove it from local storage
      // navigate("/content-loader");
      MainApi.getInitialAppInfo(token)
        .then((res) => {
          if (res) {
            const [userInfo, savedCardsData] = res;
            setCurrentUser(userInfo);
            setSavedCards(savedCardsData);
            setKeywordsCollection(savedCardsData.map((card) => card.keyword));
            setIsLoggedIn(true);
            console.log(true);
            if (isDirectedToSavedNewsRoute) {
              handleNavigation('/saved-news');
            }
            else {
              handleNavigation('/main');
            }
          }
          else {
            localStorage.removeItem("jwt");
            setIsLoggedIn(false);
            setIsFooterDisplayed(true);
            navigate('/main');
            if (isDirectedToSavedNewsRoute) {
              setIsPopupSigninOpen(true);
            }
          }
        }).catch((err) => {
          console.log(err);
          setIsFooterDisplayed(true);
          navigate('/main');
        });
    }
    else {
      navigate('/main');
      setIsFooterDisplayed(true);
      setIsLoggedIn(false);
      if (isDirectedToSavedNewsRoute) {
        setIsPopupSigninOpen(true);
      }
    }
  }, [token, isDirectedToSavedNewsRoute]);

  //define states

  const [currentUser, setCurrentUser] = useState({});
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFound, setIsFound] = useState(true);
  const [submitError, setSubmitError] = useState('');
  const [isShowMoreActive, setIsShowMoreActive] = useState(true);

  function toggleIsdirectedToSavedNews() {
    if (isDirectedToSavedNewsRoute === false) {
      setisDirectedToSavedNewsRoute(!isDirectedToSavedNewsRoute);
    }
  }

  // functions for registration and Login

  const onRegister = (email, password, name, image) => {
    MainApi.register(email, password, name, image)
      .then((res) => {
        if (res._id) {
          closeAllPopups();
          toggleSuccessRegisterPopupState();
        }
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Error: 409') {
          setSubmitError('A user with that Email is already exist.');
        } else {
          setSubmitError('cant register. please try again later');
        }
      });
  }

  function onLogin(email, password) {
    setSubmitError('');
    MainApi.login(email, password)
      .then((res => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setToken(localStorage.getItem("jwt"));
          setIsLoggedIn(true);
          closeAllPopups();
        }
      }
      ))
      .catch(err => {
        if (err === 'Error: 401' || err === 'Error: 400') {
          setSubmitError('Email or password are incorrect. Please try again.');
        }
      });
  }
  const [newsApiRecivedCards, setNewsApiRecivedCards] = useState([]);


  const [renderedCards, setRenderedCards] = useState([]);

  const [savedCards, setSavedCards] = useState([]);



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
    setIsFound(true);
    setRenderedCards([]);
    setIsSearching(true);
    setIsLoading(true);
    setIsShowMoreActive(true);
    let editedArticles = [];
    let editedSource;
    let editedDate;
    return NewsApi.getArticles(question)
      .then(res => {
        console.log(res.articles);
        if (res.articles.length !== 0) {
          res.articles.map((article) => {
            const { description: text,
              publishedAt: date,
              source,
              title,
              url: link,
              urlToImage: image } = article;
            //edit source and date to feet the figma criateria
            editedSource = source.name;
            editedDate = convertDataToDate(date);
            const editedArticle = { isSaved: false, keyword: question, text, date: editedDate, source: editedSource, title, link, image };
            savedCards.forEach((card) => {
              if (card.link === editedArticle.link) {
                return editedArticle.isSaved = true;
              }
            })
            return editedArticles = [...editedArticles, editedArticle];
          })
          setIsLoading(false);
          setRenderedCards(editedArticles.splice(0, 3));
          setNewsApiRecivedCards(editedArticles);
        }
        else {
          setIsLoading(false);
          setIsFound(false);
        }
      }).catch(err => {
        console.log(err);
      });
  }

  function convertDataToDate(date) {
    const year = date.substr(0, 4);
    const month = date.substr(5, 2);
    let day = date.substr(8, 2);
    let monthName = '';
    Object.values(namesOfMonthes).map((monthNumber, i) => {
      if (month === monthNumber) {
        monthName = Object.keys(namesOfMonthes)[i];
      }
      return monthName;
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
    const savedCard = card;
    savedCard.isSaved = true;
    return MainApi.saveCard(card, token)
      .then((res) => {
        setSavedCards([...savedCards, res]);
        let keywords = keywordsCollection;
        setRenderedCards((state) => {
          return state.map(currentCard => {
            return currentCard.link === savedCard.link ? savedCard : currentCard;
          })
        })
        keywords.push(res.keyword);
        setKeywordsCollection(keywords);
        sortKeywordsByFrequency();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function sortKeywordsByFrequency() {
    let frequency = {};
    keywordsCollection.forEach((keyword) => {
      frequency[keyword] = frequency[keyword] ? frequency[keyword] + 1 : 1;
    });

    keywordsCollection.sort((a, b) => {
      return frequency[b] - frequency[a];
    });

    let singleKeywords = keywordsCollection.filter((card, i) => {
      return keywordsCollection.indexOf(card) === i;
    })
    let keywordsToPrint = [];
    singleKeywords.forEach((keyword, i) => {
      if (i < 2) {
        keywordsToPrint[i] = keyword;
      }
      if (i === 2) {
        keywordsToPrint[i] = 1;
      }
      else {
        keywordsToPrint[2] = keywordsToPrint[2] + 1;
      }
    })
    return keywordsToPrint;
  }

  function onDeleteCard(card) {
    const toDeleteCard = savedCards.filter(
      (currentCard) => card.link === currentCard.link
    )[0];
    return MainApi.deleteCard(toDeleteCard._id, token)
      .then(() => {
        setSavedCards(savedCards.filter(
          (currentCard) => toDeleteCard._id !== currentCard._id
        ));
        //re-render updated cards
        setRenderedCards((state) => {
          return state.map(currentCard => {
            return currentCard.link === toDeleteCard.link ? toDeleteCard : currentCard;
          })
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  function onCardClick(card) {
    window.open(card.link, "_blank");
  }

  const cardFunctions = {
    dateConvert: convertDataToDate,
    showMoreCards: showMoreCards,
    isShowMoreActive: isShowMoreActive,
    onSaveClick: onSaveCard,
    onDeleteClick: onDeleteCard,
    onCardClick: onCardClick
  }

  function onSigninClick() {
    closeAllPopups();
    toggleSigninPopupState();
  }

  function onLogout() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate('/main');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div
        className="app"
        tabIndex={0}
        onKeyDown={handleEscPress}
      >
        <Header
          isLoggedIn={isLoggedIn}
          isMobileNavigationActive={isMobileNavigationOpen}
          onMobileNavigationButtonClick={toggleMobileNavigationState}
          onSigninClick={onSigninClick}
          insideSavedArticles={false}
          onLogout={onLogout}
        />
        <Routes>
          <Route path="/main/*"
            element={<Main
              isLoggedIn={isLoggedIn}
              isInsideMain
              isInsideSavedNews={false}
              onArticleSearch={onArticleSearch}
              cards={renderedCards}
              cardFunctions={cardFunctions}
              isSearching={isSearching}
              isLoading={isLoading}
              isFound={isFound}
            />}
          />
          <Route
            path="/saved-news/*"
            element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                changeDirectionState={toggleIsdirectedToSavedNews}
                redirectedPath="/main"
                children={
                  <Route path='/' element={
                    <>
                      <SavedNewsHeader
                        isMobileNavigationActive={isMobileNavigationOpen}
                        onMobileNavigationButtonClick={toggleMobileNavigationState}
                        onSigninClick={onSigninClick}
                        isInsideSavedNews={true}
                        onLogout={onLogout}
                      />
                      <SavedNews
                        isLoggedIn={isLoggedIn}
                        isInsideMain={false}
                        isInsideSavedNews={true}
                        savedCards={savedCards}
                        cardFunctions={cardFunctions}
                        keywords={sortKeywordsByFrequency()}
                      />
                    </>
                  } />
                }
              />
            }
          />
          {/* <Route path="/content-loader" element={<ContentLoader />} /> */}
          <Route path="*" element={<Navigate to='/main' />} />
        </Routes>
        <Footer
          isFooterDisplayed={isFooterDisplayed}
        />
        <SigninPopup
          isPopupOpen={isPopupSigninOpen}
          onSubmit={onLogin}
          onRelativePathClick={onRelativeSignupClick}
          submitError={submitError}
          onClose={closeAllPopups}
        />
        <SignupPopup
          isPopupOpen={isPopupSignupOpen}
          onSubmit={onRegister}
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
