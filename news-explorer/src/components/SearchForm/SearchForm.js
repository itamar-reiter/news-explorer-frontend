import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onArticleSearch }) {
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);

  const [articleName, setArticleName] = useState('');

  function handleArticleNameChange(e) {
    setArticleName(e.target.value);
  }

  function handleSubmit(e) {
    console.log('handling search submit');
    e.preventDefault();
    onArticleSearch(articleName);
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
          value={articleName}
          onChange={handleArticleNameChange}
          id="articleName"
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
    </section>
  );
}

export default SearchForm;
