import {React, useState} from 'react'
import Header from '../Header/Header'


function App() {
const [isInsideSavedArticles, setIsInsideSavedArticles] = useState(false);

function onSigninClick() {

}

function onLogout() {

}

  function onSavedArticlesClick(){
    setIsInsideSavedArticles(true);
  }
  return (
    <div className='app'>
      <Header 
      onSigninClick={onSigninClick}
      onSavedArticlesClick={onSavedArticlesClick}
      insideSavedArticles={isInsideSavedArticles}
      onLogout={onLogout}
      />
    </div>
  )
}

export default App