import React from 'react';
import './style.css';

const ClientInfosInput = ({
  clientName,
  tableNumber,
  setClientName,
  setTableNumber }) => {
  return (
    <div className='client-infos-box'>
      <input
        type='search'
        placeholder='Nome do cliente'
        onChange={(e) => setClientName(e.target.value)} value={clientName} />
      <input
        type='number'
        placeholder='N° Mesa'
        onChange={(e) => setTableNumber(e.target.value)} value={tableNumber} />
    </div>
  );
}
export default ClientInfosInput;