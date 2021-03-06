import React from 'react';
import './Input.scss';

type InputProps = {
    type?: React.HTMLInputTypeAttribute
    title?: string
    placeholder?: string
    disabled?: boolean
    error?: boolean
    errorMessage?: string
  }
  
  export const Input = ({
    type,
    title,
    placeholder,
    disabled,
    error,
    errorMessage,
  }: InputProps) => {
    return (
      <div className="input">
       
        <input
          id={type}
          className={`input__input ${error ? 'input__input--error' : null}`}
          type={type ?? 'text'}
          placeholder={placeholder}
          disabled={disabled}
        />
        <span className="input__error">{error && errorMessage}</span>
      </div>
    )
  }