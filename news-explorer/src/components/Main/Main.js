import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';
function Main({
  isLoggedIn,
  isInsideMain,
  isInsideSavedArticles,
  onArticleSearch,
  isSearching,
  cards
}) {
  return (
    <main className='main'>
      <SearchForm
        onArticleSearch={onArticleSearch}
      />
      <SearchResults
        isLoggedIn={isLoggedIn}
        isInsideMain={isInsideMain}
        isInsideSavedArticles={isInsideSavedArticles}
        isSearching={isSearching}
        onLoading={false}
        cards={cards}
      />
      <About />
    </main>
  )
}

export default Main;