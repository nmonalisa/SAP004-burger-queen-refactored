import React from 'react';
import './style.css'


const Button = ({ handleCLick, value, name }) => {
  return (
    <button className='button' onClick={handleCLick} value={value} >
      {name}
    </button>
  );
}

export default Button;

