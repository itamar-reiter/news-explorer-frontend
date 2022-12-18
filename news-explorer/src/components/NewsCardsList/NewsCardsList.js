import React from 'react'
import './NewsCardsList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardsList({ cards }) {

  return (
    <ul className='news-cards-list'>
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
  )
}

export default NewsCardsList;