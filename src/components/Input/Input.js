import React from 'react';
// import './style.css'

const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;