import React from 'react';
import './NewsCard.css';


function NewsCard({
  isInsideSavedArticles,
  keyword,
  card,
  title,
  date,
  text,
  source,
  image,
}) {
  return (
    <div className='news-card'>
      <div className='news-card__image' style={{backgroundImage: `url(${image})`}}>
        <button className='news-card__save-button'>
          <div className='news-card__save-icon' />
        </button>
      </div>
      <div className='news-card__description'>
        <span className='news-card__date'>{date}</span>
        <h1 className='news-card__title'>{title}</h1>
        <p className='news-card__text'>{text}</p>
        <span className='news-card__source'>{source}</span>
      </div>
    </div>
  )
}

export default NewsCard;