import React from 'react';
import './style.css';

function OrderTableFooter({
  order,
  totalPrice,
  cleanOrder,
  validateAndSendData
}) {
  return (
    <footer className='order-footer-box'>
      <div className='total-price table-footer-item'>
        <span></span>
        TOTAL  R${totalPrice}
      </div>
      <button
        className='cancel-btn table-footer-item'
        onClick={cleanOrder}>
        <img
          className='icon'
          src={require('../../assets/close.png')}
          alt='cancel' />
        CANCELAR
      </button>
      <button
        className=' send-btn table-footer-item'
        onClick={validateAndSendData}>
        <img
          className='icon'
          src={require('../../assets/tick.png')}
          alt='send'
        />
        ENVIAR
      </button>
    </footer>
  );
}

export default OrderTableFooter;