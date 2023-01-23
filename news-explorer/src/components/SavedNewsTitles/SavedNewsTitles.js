import React, { useContext } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';
import './SavedNewsTitles.css';

function SavedNewsTitles() {
  const currentUserValue = useContext(CurrentUserContext);
  return (
    <section className="saved-news-titles">
      <h1 className="saved-news-titles__title">Saved articles</h1>
      <h2 className="saved-news-titles__subtitle">
        {currentUserValue.name}
        , you have
        {currentUserValue.savedArticles}
        {' '}
        saved articles
      </h2>
      <p className="saved-news-titles__keywords">
        By keywords:&nbsp;
        <span className="saved-news-titles__keywords saved-news-titles__keywords_type_highlight">
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </section>
  );
}

export default SavedNewsTitles;
