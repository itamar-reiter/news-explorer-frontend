import React, { useState } from 'react';
import './NewsCardsList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardsList({
  isLoggedIn,
  isInsideSavedArticles,
  isInsideMain,
  cards,
  cardFunctions
}) {

  return (
    <div className={`news-cards-list ${isInsideSavedArticles ? 'news-cards-list_type_saved-news' : ''}`}>
      {isInsideMain && <h2 className="news-cards-list__title">Search results</h2>}
      <ul className="news-cards-list__content">
        {cards.map((card) => (
          <li key={card.url}>
            <NewsCard
              cardFunctions={cardFunctions}
              isLoggedIn={isLoggedIn}
              isInsideSavedArticles={isInsideSavedArticles}
              
              card={card}
              title={card.title}
              date={cardFunctions.dateConvert(card.publishedAt)}
              text={card.content}
              source={card.source.name}
              image={card.urlToImage}
            /* onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete} */
            />
          </li>
        ))}
      </ul>
      {isInsideMain &&
        <button
          className={`news-cards-list__show-more ${cardFunctions.isShowMoreActive ? '' : 'news-cards-list__show-more_inactive'}`}
          onClick={cardFunctions.showMoreCards}>
          Show more
        </button>
      }
    </div>
  );
}

export default NewsCardsList;
