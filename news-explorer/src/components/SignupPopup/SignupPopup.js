import React, { useState } from 'react';
import PopupFormInput from '../PopupFormInput/PopupFormInput';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './SignupPopup.css';

function SignupPopup({
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

  const [username, setUsername] = useState('');

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  return (
    <PopupWithForm
      isPopupOpen={isPopupOpen}
      popupTitle="Sign up"
      submitButtonText="Sign up"
      relativePath="Sign in"
      onSubmit={onSubmit}
      inputsErrors={inputsErrors}
      submitError={submitError}
      onClose={onClose}
      onRelativePathClick={onRelativePathClick}
    >
      <PopupFormInput
        label="Email"
        type="text"
        name="email"
        id="email"
        inputValue={email}
        handleInputChange={handleEmailChange}
        inputPlaceholder="Enter email"
        minLength={2}
        maxLength={30}
        isRequired
        editInputsErrors={editInputsErrors}
        isPopupOpen={isPopupOpen}
      />
      <PopupFormInput
        label="Password"
        type="text"
        name="password"
        id="password"
        inputValue={password}
        handleInputChange={handlePasswordChange}
        inputPlaceholder="Enter password"
        minLength={2}
        maxLength={30}
        isRequired
        editInputsErrors={editInputsErrors}
        isPopupOpen={isPopupOpen}
      />
      <PopupFormInput
        label="Username"
        type="text"
        name="username"
        id="username"
        inputValue={username}
        handleInputChange={handleUsernameChange}
        inputPlaceholder="Enter your username"
        minLength={2}
        maxLength={30}
        editInputsErrors={editInputsErrors}
        isRequired
        isPopupOpen={isPopupOpen}
      />
    </PopupWithForm>
  );
}

export default SignupPopup;
