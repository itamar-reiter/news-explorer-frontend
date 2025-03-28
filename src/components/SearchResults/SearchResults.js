import React from 'react';
import './SearchResults.css';
import PreLoader from '../Preloader/Preloader';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import NotFound from '../NotFound/NotFound';

function SearchResults({
  isLoggedIn,
  isSearching,
  isLoading,
  cards,
  cardFunctions,
  isInsideSavedNews,
  isInsideMain,
  isFound,
}) {
  return (
    <section className={`search-results ${isSearching ? '' : 'search-results_hidden'}`}>
      {isLoading && <PreLoader />}
      {cards.length !== 0 && (
        <NewsCardsList
          isLoggedIn={isLoggedIn}
          isInsideSavedNews={isInsideSavedNews}
          isInsideMain={isInsideMain}
          cards={cards}
          cardFunctions={cardFunctions}
        />
      )}
      {!isFound && <NotFound />}
    </section>
  );
}

export default SearchResults;
