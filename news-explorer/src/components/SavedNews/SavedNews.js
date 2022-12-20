import React, {useContext} from 'react'
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import SavedNewsTitles from '../SavedNewsTitles/SavedNewsTitles';
import './SavedNews.css';
import CurrentUserContext from '../../utils/CurrentUserContext';

function SavedNews({ isInsideSavedArticles, savedCards }) {
  const currentUserValue = useContext(CurrentUserContext);
  return (
    <section className='saved-news'>
      <SavedNewsTitles name={currentUserValue.name}
      savedCards={savedCards}
      />
      {/* <NewsCardsList
        isInsideSavedArticles={isInsideSavedArticles}
        cards={savedCards}
      /> */}
    </section>
  )
}

export default SavedNews