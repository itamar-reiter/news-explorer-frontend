import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './NewsCard.css';
import CardImage from '../CardImage/CardImage';

function NewsCard({
  cardFunctions,
  isLoggedIn,
  card,
  isInsideMain,
  isInsideSavedNews
}) {

  const [isArticleSaved, setIsArticleSaved] = useState(card.isSaved);
  function toggleArticleSavedState() {

    setIsArticleSaved(!isArticleSaved);
  }

  function onSaveArticleClick(evt) {
    evt.stopPropagation();
    if (isLoggedIn) {
      return cardFunctions.onSaveClick(card)
        .then(() => {
          toggleArticleSavedState();
        })
    }
  }

  function onDeleteArticleClick(evt) {
    evt.stopPropagation();
    return cardFunctions.onDeleteClick(card)
      .then(() => {
        toggleArticleSavedState();
      });
  }
  return (
    <div className="news-card"
      onClick={() => cardFunctions.onCardClick(card)}>
      {<CardImage
        isInsideMain={isInsideMain}
        isInsideSavedNews={isInsideSavedNews}
        isArticleSaved={isArticleSaved}
        isLoggedIn={isLoggedIn}
        card={card}
        onSaveArticleClick={onSaveArticleClick}
        onDeleteArticleClick={onDeleteArticleClick}
      />}

      <div className="news-card__description">
        <span className="news-card__date">{card.date}</span>
        <h3 className="news-card__title">{card.title}</h3>
        <p className="news-card__text">{card.text}</p>
        <span className="news-card__source">{card.source}</span>
      </div>
    </div>
  );
}

export default NewsCard;
