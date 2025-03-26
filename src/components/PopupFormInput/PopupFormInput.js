import React, { useState, useRef, useEffect } from 'react';
import './PopupFormInput.css';

function PopupFormInput({
  isPopupOpen,
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
  editInputsErrors,
}) {
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [errorText, setErrorText] = useState('');

  // initializing inputs errors;

  useEffect(() => {
    if (isPopupOpen) {
      if (!inputRef.current.checkValidity() || inputValue === '') {
        editInputsErrors(true, id);
      } else {
        editInputsErrors(false, id);
      }
    }
  }, [isPopupOpen]);
  
  const onInputChange = (e) => {
    console.log('handle input change was triggered');
    handleInputChange(e);
    if (!inputRef.current.checkValidity()) {
      editInputsErrors(true, id);
      setErrorText(inputRef.current.validationMessage);
    } else {
      editInputsErrors(false, id);
      setErrorText('');
    }
  };

  return (
    <div className="form-field">
      <label className="form-field__label">{label}</label>
      <input
        ref={inputRef}
        className={`form-field__input ${isFocused ? 'form-feild__input_type_focused' : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type={type}
        name={name}
        id={id}
        value={inputValue || ''}
        onInput={onInputChange}
        onCut={onInputChange}
        onPaste={onInputChange}
        placeholder={inputPlaceholder}
        minLength={minLength}
        maxLength={maxLength}
        required={isRequired}
      />
      <span className="form-field__error">{errorText}</span>
    </div>
  );
}

export default PopupFormInput;
