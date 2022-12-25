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

  const closePopupOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  const handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      onClose();
    }
  };
  return (
    <div className='popup'>
      <div className='popup__head'>
        <h1 className='popup__title'>{popupTitle}</h1>
        <button className='popup__esc' />
      </div>
      {children}
      <span className='popup__error popup__error_submit'>{submitErrorLabel}</span>
      <button className='popup__submit-button'>{submitButtonText}</button>
      <p className='popup__relative-path'>or&nbsp;
        <span onClick={onRelativePathClick}
          className='popup__relative-path popup__relative-path_link-style'>
          {relativePath}
        </span>
      </p>
    </div>
  );
}

export default PopupWithForm;