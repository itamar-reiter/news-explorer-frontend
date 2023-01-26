import React, { useContext } from 'react';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import SavedNewsTitles from '../SavedNewsTitles/SavedNewsTitles';
import './SavedNews.css';
import CurrentUserContext from '../../utils/CurrentUserContext';

function SavedNews({
  isLoggedIn, isInsideSavedArticles, isInsideMain, savedCards, cardFunctions
}) {
  const currentUserValue = useContext(CurrentUserContext);
  return (
    <section className="saved-news">
      <SavedNewsTitles
        name={currentUserValue.name}
        savedCards={savedCards}
      />
      <NewsCardsList
        isLoggedIn={isLoggedIn}
        isInsideMain={isInsideMain}
        isInsideSavedArticles={isInsideSavedArticles}
        cards={savedCards}
        cardFunctions={cardFunctions}
      />
    </section>
  );
}

export default SavedNews;
