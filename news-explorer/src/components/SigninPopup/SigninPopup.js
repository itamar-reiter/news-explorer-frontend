import React, { useState } from 'react';
import PopupFormInput from '../PopupFormInput/PopupFormInput';
import './SigninPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SigninPopup({
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

  function toggleSubmitButtonClickedState(isClicked) {
    setisSubmitButtonClicked(isClicked);
  }

  const [email, setEmail] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
    toggleSubmitButtonClickedState(false);
  }

  const [password, setPassword] = useState('');

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    toggleSubmitButtonClickedState(false);
  }


  const onSubmitPopup = () => {
    toggleSubmitButtonClickedState(true);
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
      isSubmitButtonClicked={isSubmitButtonClicked}
      inputsErrors={inputsErrors}
      onClose={onClose}
      onRelativePathClick={onRelativePathClick}
    >
      <PopupFormInput
        label="Email"
        type="email"
        name="email"
        id="signInEmail"
        inputValue={email}
        handleInputChange={handleEmailChange}
        inputPlaceholder="Enter email"
        minLength={2}
        isRequired={true}
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
        isRequired={true}
        editInputsErrors={editInputsErrors}
        isPopupOpen={isPopupOpen}
      />
    </PopupWithForm>
  );
}

export default SigninPopup;
