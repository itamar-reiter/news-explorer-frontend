import React, { useState } from 'react';
import PopupFormInput from '../PopupFormInput/PopupFormInput';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './SignupPopup.css';

function SignupPopup({
  isPopupOpen,
  onSubmit,
  onRelativePathClick,
  submitError,
  onClose,
}) {

  const [inputsErrors, setInputsErrors] = useState([]);

  const editInputsErrors = (isError, inputName) => {
    let tempErrorsArray = inputsErrors;
    tempErrorsArray = tempErrorsArray.filter((name) => name !== inputName);
    if (isError) {
      tempErrorsArray.push(inputName);
    }
    setInputsErrors(tempErrorsArray);
  };

  const [isSubmitButtonClicked, setisSubmitButtonClicked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  function toggleSubmitButtonClickedState(isClicked) {
    setisSubmitButtonClicked(isClicked);
  }

  function handleInputChange(setState, e, shouldResetSubmit = true) {
    setState(e.target.value);
    if (shouldResetSubmit) {
      toggleSubmitButtonClickedState(false);
    }
  }

  function onSubmitPopup() {
    toggleSubmitButtonClickedState(true);
    onSubmit(email, password, username, imageUrl);
  }
  return (
    <PopupWithForm
      isPopupOpen={isPopupOpen}
      popupTitle="Sign up"
      submitButtonText="Sign up"
      relativePath="Sign in"
      onSubmit={onSubmitPopup}
      isSubmitButtonClicked={isSubmitButtonClicked}
      inputsErrors={inputsErrors}
      submitError={submitError}
      onClose={onClose}
      onRelativePathClick={onRelativePathClick}
    >
      <PopupFormInput
        label="Email"
        type="email"
        name="email"
        id="signUpEmail"
        inputValue={email}
        handleInputChange={(e) => handleInputChange(setEmail, e)}
        inputPlaceholder="Enter email"
        minLength={2}
        maxLength={30}
        isRequired={true}
        editInputsErrors={editInputsErrors}
        isPopupOpen={isPopupOpen}
      />
      <PopupFormInput
        label="Password"
        type="text"
        name="password"
        id="password"
        inputValue={password}
        handleInputChange={(e) => handleInputChange(setPassword, e)}
        inputPlaceholder="Enter password"
        minLength={2}
        maxLength={30}
        isRequired={true}
        editInputsErrors={editInputsErrors}
        isPopupOpen={isPopupOpen}
      />
      <PopupFormInput
        label="Username"
        type="text"
        name="username"
        id="username"
        inputValue={username}
        handleInputChange={(e) => handleInputChange(setUsername, e)}
        inputPlaceholder="Enter your username"
        minLength={2}
        maxLength={30}
        editInputsErrors={editInputsErrors}
        isRequired={true}
        isPopupOpen={isPopupOpen}
      />
      <PopupFormInput
        label="Image"
        type="url"
        name="userImageLink"
        id="userImageLink"
        inputValue={imageUrl}
        handleInputChange={(e) => handleInputChange(setImageUrl, e)}
        inputPlaceholder="Enter image URL"
        minLength={2}
        editInputsErrors={editInputsErrors}
        isRequired={true}
        isPopupOpen={isPopupOpen}
      />
    </PopupWithForm>
  );
}

export default SignupPopup;
