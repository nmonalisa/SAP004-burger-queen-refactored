import React from 'react';
import './style.css'

function RegisterForm({ sector, setSector }) {
  return (
    <div className='select-box'>
      <label className='select-label'>
        Em qual setor você trabalha?
      </label>
      <select
        className='select-options'
        onChange={e => setSector(e.target.value)}
        value={sector} >
        <option value='' > Selecione... </option>
        <option value='kitchen' > Cozinha </option>
        <option value='saloon' > Salão </option>
      </select>
    </div>
  )
};

export default RegisterForm;
