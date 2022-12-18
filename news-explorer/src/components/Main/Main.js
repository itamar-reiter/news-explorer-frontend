import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';
function Main({ onArticleSearch, cards }) {
  return (
    <main className='main'>
      <SearchForm
        onArticleSearch={onArticleSearch}
      />
      <SearchResults onLoading={false} cards={cards}/>
      <About />
    </main>
  )
}

export default Main;