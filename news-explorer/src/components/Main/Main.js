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
  isLoading,
  cards,
  isFound,
}) {
  return (
    <main className="main">
      <SearchForm
        onArticleSearch={onArticleSearch}
      />
      <SearchResults
        isLoggedIn={isLoggedIn}
        isInsideMain={isInsideMain}
        isInsideSavedArticles={isInsideSavedArticles}
        isSearching={isSearching}
        isLoading={isLoading}
        cards={cards}
        isFound={isFound}
      />
      <About />
    </main>
  );
}

export default Main;
