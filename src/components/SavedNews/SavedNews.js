import React, { useContext } from 'react';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import SavedNewsTitles from '../SavedNewsTitles/SavedNewsTitles';
import './SavedNews.css';
import CurrentUserContext from '../../utils/CurrentUserContext';

function SavedNews({
  isLoggedIn, isInsideSavedNews, isInsideMain, savedCards, cardFunctions, keywords
}) {
  const currentUserValue = useContext(CurrentUserContext);
  return (
    <section className="saved-news">
      <SavedNewsTitles
        savedCards={savedCards}
        keywords={keywords}
      />
      {savedCards.length !== 0 && <NewsCardsList
        isLoggedIn={isLoggedIn}
        isInsideMain={isInsideMain}
        isInsideSavedNews={isInsideSavedNews}
        cards={savedCards}
        cardFunctions={cardFunctions}
      />}
    </section>
  );
}

export default SavedNews;
