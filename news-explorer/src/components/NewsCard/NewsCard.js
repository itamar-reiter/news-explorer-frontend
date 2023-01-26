import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './NewsCard.css';

function NewsCard({
  cardFunctions,
  isLoggedIn,
  keyword,
  card,
  title,
  date,
  text,
  source,
  image,
}) {


  const [isArticleSaved, setIsArticleSaved] = useState(false);
  function toggleArticleSavedState() {

    setIsArticleSaved(!isArticleSaved);
  }

  function onSaveArticleClick() {
    if (isLoggedIn) {
      toggleArticleSavedState();
      cardFunctions.onSaveClick(card);
    }
  }

  return (
    <div className="news-card">
      <Route exact path="/">
        <div className="news-card__image news-card__image_type_main" style={{ backgroundImage: `url(${image})` }}>
          <button className={`news-card__button ${!isLoggedIn ? 'news-card__button_not-logged-in' : ''}`}
            onClick={onSaveArticleClick}
          >
            <div className={`news-card__save-icon ${isArticleSaved ? 'news-card__save-icon_active' : ''}`} />
          </button>
          <span className="news-card__popup-text news-card__popup-text_type_main">Sign in to save articles</span>
        </div>
      </Route>
      <Route path="/saved-news">
        <div className="news-card__image news-card__image_type_saved-news">
          <button className="news-card__button news-card__button_type_saved-news">
            <div className="news-card__garbage-icon" />
          </button>
          <span className="news-card__popup-text news-card__popup-text_type_saved-news">Remove from saved</span>
          <p className="news-card__keyword">{keyword}</p>
        </div>
      </Route>
      <div className="news-card__description">
        <span className="news-card__date">{date}</span>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <span className="news-card__source">{source}</span>
      </div>
    </div>
  );
}

export default NewsCard;
