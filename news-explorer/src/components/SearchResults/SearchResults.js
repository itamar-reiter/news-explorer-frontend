import React from 'react'
import './SearchResults.css';
import PreLoader from '../Preloader/Preloader';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import NotFound from '../NotFound/NotFound';

function SearchResults({ isLoggedIn, isSearching, onLoading, cards, isInsideSavedArticles }) {

  let RenderedElement = null;

  if (onLoading) {
    RenderedElement = <PreLoader />
  }
  else if (cards) {
    RenderedElement = <NewsCardsList isLoggedIn={isLoggedIn} cards={cards} isInsideSavedArticles={isInsideSavedArticles} />
  }
  else {
    RenderedElement = <NotFound />
  }


  return (
    <section className={`search-results ${isSearching? "" : "search-results_hidden"}`}>
      {RenderedElement}
    </section>
  )
}

export default SearchResults;