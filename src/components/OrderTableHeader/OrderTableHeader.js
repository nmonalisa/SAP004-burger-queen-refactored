import React from 'react';
import './style.css';

function OrderTableHeader() {
  return (
    <header className='order-header-box'>
      <div>Produto</div>
      <div>Opções</div>
      <div>Adicional</div>
      <div>Quantidade</div>
    </header>
  );
}

export default OrderTableHeader;