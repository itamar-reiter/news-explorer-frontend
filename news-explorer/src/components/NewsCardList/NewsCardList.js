import React from 'react'
import NotFound from '../NotFound/NotFound';

function NewsCardList({cards}) {
  function CardsList() {

  }
  
  return (
    <div>
      {cards? <CardsList/>: <NotFound/> }
    </div>
  )
}

export default NewsCardList;