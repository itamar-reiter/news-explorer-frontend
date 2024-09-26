import React from 'react'

function CardImage({
  isLoggedIn,
  card,
  isInsideMain,
  isInsideSavedNews,
  isArticleSaved,
  onDeleteArticleClick,
  onSaveArticleClick
}) {

  console.log("in cardImage. \ncurrent path = " + isInsideMain + ", " + isInsideSavedNews);

  return (
    <>
      {isInsideMain && <div className="news-card__image news-card__image_type_main" style={{ backgroundImage: `url(${card.image})` }}>
        <button className={`news-card__button ${!isLoggedIn ? 'news-card__button_not-logged-in' : ''}`}
          onClick={isArticleSaved ? onDeleteArticleClick : onSaveArticleClick}
        >
          <div className={`news-card__save-icon ${isArticleSaved ? 'news-card__save-icon_active' : ''}`} />
        </button>
        <span className="news-card__popup-text news-card__popup-text_type_main">Sign in to save articles</span>
      </div>}
      {isInsideSavedNews && <div className="news-card__image news-card__image_type_saved-news" style={{ backgroundImage: `url(${card.image})` }}>
        <button className="news-card__button news-card__button_type_saved-news"
          onClick={onDeleteArticleClick}>
          <div className="news-card__garbage-icon" />
        </button>
        <span className="news-card__popup-text news-card__popup-text_type_saved-news">Remove from saved</span>
        <p className="news-card__keyword">{card.keyword}</p>
      </div>}
    </>
  )
}

export default CardImage