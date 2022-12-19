import React from 'react'
import './NewsCardsList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardsList({ cards }) {

  return (
    <div className='news-cards-list'>
    <h1 className='news-cards-list__title'>Search results</h1>
    <ul className='news-cards-list__content'>
      {cards.map((card) => (
        <NewsCard
          key={card._id}
          card={card}
        /* onCardClick={onCardClick}
        onCardLike={onCardLike}
        onCardDelete={onCardDelete} */
        />
      ))}
    </ul>
    <button className='news-cards-list__show-more'>Show more</button>
    </div>
  )
}

export default NewsCardsList;