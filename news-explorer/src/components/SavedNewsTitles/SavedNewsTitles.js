import React, { useContext } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';
import './SavedNewsTitles.css';

function SavedNewsTitles() {
  const currentUserValue = useContext(CurrentUserContext);
  return (
    <section className="saved-news-titles">
      <h1 className="saved-news-titles__title">Saved articles</h1>
      <p className="saved-news-titles__intro">
        {currentUserValue.name}
        , you have
        {currentUserValue.savedArticles}
        {' '}
        saved articles
      </p>
      <p className="saved-news-titles__keywords">
        By keywords:&nbsp;
        <span className="saved-news-titles__keywords_highlight">
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </section>
  );
}

export default SavedNewsTitles;
