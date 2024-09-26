import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';

function Main({
  isLoggedIn,
  isInsideMain,
  isInsideSavedNews,
  onArticleSearch,
  isSearching,
  isLoading,
  cards,
  cardFunctions,
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
        isInsideSavedNews={isInsideSavedNews}
        isSearching={isSearching}
        isLoading={isLoading}
        cards={cards}
        cardFunctions={cardFunctions}
        isFound={isFound}
      />
      <About />
    </main>
  );
}

export default Main;
