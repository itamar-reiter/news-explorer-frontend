import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCardsList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardsList({
  isLoggedIn,
  cards,
  cardFunctions
}) {

  const location = useLocation();

  const [isInsideMain, setIsInsideMain] = useState(false);
  const [isInsideSavedNews, setIsInsideSavedNews] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith('/main')) {
      setIsInsideSavedNews(false);
      setIsInsideMain(true);
    } else if (location.pathname.startsWith('/saved-news')) {
      setIsInsideSavedNews(true);
      setIsInsideMain(false);
    }
  }, [location]);



  return (
    <div className={`news-cards-list ${isInsideSavedNews ? 'news-cards-list_type_saved-news' : ''}`}>
      {isInsideMain && <h2 className="news-cards-list__title">Search results</h2>}
      <ul className="news-cards-list__content">
        {cards.map((card) => (
          <li key={card.link}>
            <NewsCard
              cardFunctions={cardFunctions}
              isLoggedIn={isLoggedIn}
              card={card}
              isInsideMain={isInsideMain}
              isInsideSavedNews={isInsideSavedNews}
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
