import React, { useContext } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';
import './SavedNewsTitles.css';

function SavedNewsTitles({ savedCards, keywords }) {
  const currentUserValue = useContext(CurrentUserContext);
  return (
    <section className="saved-news-titles">
      <h1 className="saved-news-titles__title">Saved articles</h1>
      <h2 className="saved-news-titles__subtitle">
        {currentUserValue.name}
        , you have {' '}
        {savedCards.length === 0 ? 'no' : savedCards.length}
        {' '}
        saved articles
        {savedCards.length === 0 &&
          ' yet. to save an article, go back to home page and click on the icon at the top right corner of any card you search.'}
      </h2>
      <p className="saved-news-titles__keywords">
        {keywords[0] ? 'By keywords:': ''}&nbsp;
        <span className="saved-news-titles__keywords saved-news-titles__keywords_type_highlight">
          {`${keywords[0] ? `${keywords[0]}`: ''} ${keywords[1] ? `, ${keywords[1]}`: ''} ${keywords[2] ? `, and ${keywords[2]} other`: ''}`}
        </span>
      </p>
    </section>
  );
}

export default SavedNewsTitles;
