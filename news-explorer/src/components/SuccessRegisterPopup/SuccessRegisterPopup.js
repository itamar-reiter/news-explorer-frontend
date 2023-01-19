import React from 'react'
import './SuccessRegisterPopup.css';

function SuccessRegisterPopup({
  isPopupOpen,
  onRelativePathClick,
  onClose
}) {

  const closePopupOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup popup_success-register ${isPopupOpen ? 'popup_active' : ''}`}
      onClick={closePopupOverlay}
    >
      <div className="popup__content popup__content_success-register">
        <div className="popup__head">
          <h1 className="popup__title">Registration successfully<br/>completed!</h1>
          <button className="popup__esc popup__esc_success-register" onClick={onClose} />
        </div>
          <span
            onClick={onRelativePathClick}
            className="popup__relative-path popup__relaative-path_success-register popup__relative-path_link-style popup__relative-path_link-style_success-register"
          >
            {"Sign in"}
          </span>
      </div>
    </div>
  )
}

export default SuccessRegisterPopup