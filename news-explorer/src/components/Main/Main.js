import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
function Main({onArticleSearch}) {
  return (
    <main className='main'>
      <SearchForm
onArticleSearch={onArticleSearch}
      />
      <About />
    </main>
  )
}

export default Main;