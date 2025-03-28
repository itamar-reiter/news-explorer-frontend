import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onArticleSearch }) {
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
  const [isHotestButtonClicked, setIsHotestButtonClicked] = useState(false);

  function onHotestNewsClick(e) {
    e.preventDefault();
    setIsHotestButtonClicked(true);
    onArticleSearch('hotest-news');
  }
  const [articleKeyword, setArticleKeyword] = useState('');

  function handleArticleKeywordChange(e) {
    setIsSubmitButtonClicked(false);
    setArticleKeyword(e.target.value);
  }

  function handleSubmit(e) {
    console.log('handling search submit');
    e.preventDefault();
    onArticleSearch(articleKeyword);
  }

  function onSubmitClick(e) {
    setIsSubmitButtonClicked(true);
  }
  return (
    <section className="search-form">
      <h1 className="search-form__title">What's going on in the world?</h1>
      <h2 className="search-form__subtitle">Find the latest news on any topic and save them in your personal account.</h2>
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          name="article-name"
          value={articleKeyword}
          onChange={handleArticleKeywordChange}
          id="articleKeyword"
          placeholder="Enter topic"
          minLength="1"
          maxLength="30"
          required
        />
        <button
          type="submit"
          id="articleSearchSubmit"
          onClick={onSubmitClick}
          className={`search-form__submit-button ${isSubmitButtonClicked ? 'search-form__submit-button_active' : ''}`}
        >
          Search
        </button>

      </form>
      <button
        type='button'
        id="hotestNewsId"
        onClick={onHotestNewsClick}
        className={`search-form__hotest-news ${isHotestButtonClicked ? 'search-form__hotest-news-active' : ''}`}
      >
        Hotest News
      </button>
    </section>
  );
}

export default SearchForm;
