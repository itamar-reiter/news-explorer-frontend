import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
function Main({onArticleSearch}) {
  return (
    <div className='main'>
      <SearchForm
onArticleSearch={onArticleSearch}
      />
      {/* <About/> */}
    </div>
  )
}

export default Main;