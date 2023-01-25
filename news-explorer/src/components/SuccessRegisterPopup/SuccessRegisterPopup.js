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
      className={`popup popup_type_success-register ${isPopupOpen ? 'popup_active' : ''}`}
      onClick={closePopupOverlay}
    >
      <div className="popup__content popup__content_type_success-register">
        <div className="popup__head">
          <h2 className="popup__title">Registration successfully<br/>completed!</h2>
          <button className="popup__esc popup__esc_type_success-register" onClick={onClose} />
        </div>
          <button
            onClick={onRelativePathClick}
            className="popup__relative-path popup__relaative-path_type_success-register popup__relative-path_style_link-style popup__relative-path_style_success-register-link-style"
          >
            {"Sign in"}
          </button>
      </div>
    </div>
  )
}

export default SuccessRegisterPopup