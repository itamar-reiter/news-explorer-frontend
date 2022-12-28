import React ,{useState}from 'react'
import PopupFormInput from '../PopupFormInput/PopupFormInput';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './SignupPopup.css';
function SignupPopup({
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

  const [username, setUsername] = useState('');

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  return (
    <PopupWithForm
      isPopupOpen={isPopupOpen}
      popupTitle={'Sign up'}
      submitButtonText={'Sign up'}
      /* submitErrorLabel={'This email is not available'} */
      relativePath={'Sign in'}
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
      <PopupFormInput 
      label={'Username'}
      type={'text'}
      name={'username'}
      id={'username'}
      inputValue={username}
      handleInputChange={handleUsernameChange}
      inputPlaceholder={'Enter your username'}
      isRequired={true}/>
    </PopupWithForm>
  )
}

export default SignupPopup;

