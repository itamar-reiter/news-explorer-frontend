import React, { useState } from 'react';
import './PopupFormInput.css';

function PopupFormInput({
  label,
  type,
  name,
  id,
  inputValue,
  handleInputChange,
  inputPlaceholder,
  minLength,
  maxLength,
  isRequired,
  errorMessage
}) {

  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className='form-field'>
      <label className='form-field__label'>{label}</label>
      <input
        className={`form-field__input ${isFocused ? 'form-feild__input_focused' : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type={type}
        name={name}
        id={id}
        value={inputValue || ''}
        onChange={handleInputChange}
        placeholder={inputPlaceholder}
        minLength={minLength}
        maxLength={maxLength}
        required={isRequired} />
      <span className='form-field__error'>{errorMessage}</span>
    </div>
  )
}

export default PopupFormInput;