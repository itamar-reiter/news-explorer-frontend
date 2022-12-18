import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';
function Main({ onArticleSearch }) {
  return (
    <main className='main'>
      <SearchForm
        onArticleSearch={onArticleSearch}
      />
      <SearchResults onLoading={false}/>
      <About />
    </main>
  )
}

export default Main;