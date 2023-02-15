import React, { useState, useEffect } from 'react';
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
  isSubmitButtonClicked,
  onRelativePathClick,
  relativePath,
  inputsErrors,
  submitError,
  children,
}) {
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit();
  }
  const closePopupOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      if (inputsErrors.length === 0) {
        setIsSubmitButtonDisabled(false);
      } else {
        setIsSubmitButtonDisabled(true);
      }
    }
  }, [inputsErrors]);

  return (
    <div
      className={`popup ${isPopupOpen ? 'popup_active' : ''}`}
      onClick={closePopupOverlay}
    >
      <div className="popup__content">
        <div className="popup__head">
          <h2 className="popup__title">{popupTitle}</h2>
          <button className="popup__esc" onClick={onClose} />
        </div>
        <form className="popup__form" onSubmit={handleSubmit}>
          {children}
          <span className='popup__submit-error' >{submitError}</span>
          <button
            className={`popup__submit-button ${isSubmitButtonDisabled ? '' : 'popup__submit-button_type_enabled'} ${isSubmitButtonClicked? 'popup__submit-button_type_active': ''}`}
            type="submit"
            id={submitButtonId}
            disabled={isSubmitButtonDisabled}
          >
            {submitButtonText}
          </button>
        </form>
        <p className="popup__relative-path">
          or&nbsp;
          <button
            onClick={onRelativePathClick}
            className="popup__relative-path popup__relative-path_style_link-style"
          >
            {relativePath}
          </button>
        </p>
      </div>
    </div>
  );
}

export default PopupWithForm;
