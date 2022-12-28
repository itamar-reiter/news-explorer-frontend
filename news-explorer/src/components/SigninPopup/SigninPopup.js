import React, { useState } from 'react';
import PopupFormInput from '../PopupFormInput/PopupFormInput';
import './SigninPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function SigninPopup({
  isPopupOpen,
  onSubmit,
  onRelativePathClick,
  onClose
}) {
  const [email, setEmail] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const [password, setPassword] = useState('');

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <PopupWithForm
      isPopupOpen={isPopupOpen}
      popupTitle={'Sign in'}
      submitButtonText={'Sign in'}
      /* submitErrorLabel={'This email is not available'} */
      relativePath={'Sign up'}
      onSubmit={onSubmit}
      onClose={onClose}
      onRelativePathClick={onRelativePathClick}
    >
      <PopupFormInput
        label='Email'
        type={"text"}
        name={'email'}
        id={'email'}
        inputValue={email}
        handleInputChange={handleEmailChange}
        inputPlaceholder='Enter email'
        isRequired={true}
      /* errorMessage={'Invalid email address'} */
      />
      <PopupFormInput
        label='Password'
        type='text'
        name={'password'}
        id={'password'}
        inputValue={password}
        handleInputChange={handlePasswordChange}
        inputPlaceholder='Enter password'
        isRequired={true}
      /* errorMessage={'invalid password'} */
      />
    </PopupWithForm>
  )
}

export default SigninPopup