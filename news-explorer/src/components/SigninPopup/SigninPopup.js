import React, { useState } from 'react';
import PopupFormInput from '../PopupFormInput/PopupFormInput';
import './SigninPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SigninPopup({
  isPopupOpen,
  onSubmit,
  onRelativePathClick,
  inputsErrors,
  submitError,
  editInputsErrors,
  onClose,
}) {
  const [email, setEmail] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const [password, setPassword] = useState('');

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const onSubmitPopup = () => {
    onSubmit(email, password);
  }
  return (
    <PopupWithForm
      isPopupOpen={isPopupOpen}
      popupTitle="Sign in"
      submitButtonText="Sign in"
      submitError={submitError}
      relativePath="Sign up"
      onSubmit={onSubmitPopup}
      inputsErrors={inputsErrors}
      onClose={onClose}
      onRelativePathClick={onRelativePathClick}
    >
      <PopupFormInput
        label="Email"
        type="text"
        name="email"
        id="signInEmail"
        inputValue={email}
        handleInputChange={handleEmailChange}
        inputPlaceholder="Enter email"
        minLength={2}
        isRequired
        editInputsErrors={editInputsErrors}
        isPopupOpen={isPopupOpen}
      />
      <PopupFormInput
        label="Password"
        type="text"
        name="password"
        id="signInPassword"
        inputValue={password}
        handleInputChange={handlePasswordChange}
        inputPlaceholder="Enter password"
        minLength={2}
        maxLength={30}
        isRequired
        editInputsErrors={editInputsErrors}
        isPopupOpen={isPopupOpen}
      />
    </PopupWithForm>
  );
}

export default SigninPopup;
