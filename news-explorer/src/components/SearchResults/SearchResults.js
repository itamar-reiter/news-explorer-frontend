import React from 'react'
import './SearchResults.css';
import PreLoader from '../Preloader/Preloader';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import NotFound from '../NotFound/NotFound';

function SearchResults({ onLoading, cards }) {

  let RenderedElement = null;

  if (onLoading) {
    RenderedElement = <PreLoader />
  }
  else if (cards) {
    RenderedElement = <NewsCardsList cards={cards} />
  }
  else {
    RenderedElement = <NotFound />
  }


  return (
    <section className='search-results'>
      {RenderedElement}
    </section>
  )
}

export default SearchResults;