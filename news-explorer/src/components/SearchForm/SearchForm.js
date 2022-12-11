import React, { useState } from 'react'
import './SearchForm.css';

function SearchForm({ onArticleSearch }) {
  const [articleName, setArticleName] = useState('');

  function handleArticleNameChange(e) {
    setArticleName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onArticleSearch(articleName);
  }
  return (
    <div className='search-form'>
      <h1 className='search-form__title'>What's going on in the world?</h1>
      <h2 className='search-form__subtitle'>Find the latest news on any topic and save them in your personal account.</h2>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <input
          className='search-form__input'
          type="text"
          name="article-name"
          value={articleName}
          onChange={handleArticleNameChange}
          id="articleName"
          placeholder='Enter topic'
          minLength="1"
          maxLength="30"
          required
        />
        <button
          type="submit"
          id="articleSearchSubmit"
          className="search-form__submit-button"
        >
          Search
        </button>
      </form>

    </div>
  )
}

export default SearchForm;