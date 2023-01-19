import React from 'react';
import './SearchResults.css';
import PreLoader from '../Preloader/Preloader';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import NotFound from '../NotFound/NotFound';

function SearchResults({
  isLoggedIn, isSearching, isLoading, cards, isInsideSavedArticles, isInsideMain, isFound,
}) {
  return (
    <section className={`search-results ${isSearching ? '' : 'search-results_hidden'}`}>
      {isLoading && <PreLoader />}
      {cards && (
      <NewsCardsList
        isLoggedIn={isLoggedIn}
        isInsideSavedArticles={isInsideSavedArticles}
        isInsideMain={isInsideMain}
        cards={cards}
      />
      )}
      {!isFound && <NotFound />}
    </section>
  );
}

export default SearchResults;
