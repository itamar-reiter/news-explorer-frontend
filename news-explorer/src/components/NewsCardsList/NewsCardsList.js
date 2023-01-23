import React from 'react';
import './NewsCardsList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardsList({
  isLoggedIn,
  isInsideSavedArticles,
  isInsideMain,
  cards,
}) {
  return (
    <div className={`news-cards-list ${isInsideSavedArticles ? 'news-cards-list_type_saved-news' : ''}`}>
      {isInsideMain && <h2 className="news-cards-list__title">Search results</h2>}
      <ul className="news-cards-list__content">
        {cards.map((card) => (
          <li key={card._id}>
            <NewsCard
              isLoggedIn={isLoggedIn}
              isInsideSavedArticles={isInsideSavedArticles}
              keyword={card.keyword}
              card={card}
              title={card.title}
              date={card.date}
              text={card.text}
              source={card.source}
              image={card.image}
            /* onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete} */
            />
          </li>
        ))}
      </ul>
      {isInsideMain && <button className="news-cards-list__show-more">Show more</button>}
    </div>
  );
}

export default NewsCardsList;
