import React from 'react'
import './SearchResults.css';
import PreLoader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults({ onLoading }) {
  return (
    <section className='search-results'>
      {onLoading ? <PreLoader /> : <NewsCardList cards={false} />}
    </section>
  )
}

export default SearchResults;