import React from 'react';
import { Link } from 'react-router-dom';
import './PopupWithForm.css';

function PopupWithForm({
  popupName,
  isPopupOpen,
  onClose,
  onSubmit,
  popupTitle,
  submitButtonId,
  submitButtonText,
  onRelativePathClick,
  relativePath,
  submitErrorLabel,
  children,
}) {

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit();
  }
  const closePopupOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };


  return (
    <div className={`popup ${isPopupOpen ? 'popup_active' : ''}`}
      onClick={closePopupOverlay}>
      <div className='popup__content'>
        <div className='popup__head'>
          <h1 className='popup__title'>{popupTitle}</h1>
          <button className='popup__esc' onClick={onClose} />
        </div>
        <form className='popup__form' onSubmit={handleSubmit}>
          {children}
          <span className={`popup__submit-error ${submitErrorLabel ? 'popup__submit-error_active' : ''}`}>{submitErrorLabel}</span>
          <button
            className='popup__submit-button'
            type='submit'
            id={submitButtonId}
          >
            {submitButtonText}
          </button>
        </form>
        <p className='popup__relative-path'>or&nbsp;
          <span onClick={onRelativePathClick}
            className='popup__relative-path popup__relative-path_link-style'>
            {relativePath}
          </span>
        </p>
      </div>
    </div>
  );
}

export default PopupWithForm;