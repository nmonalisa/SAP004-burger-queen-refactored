import React from 'react';
import './style.css'

const OrderCard = ({ place, order, orderID, handleClick }) => {
  return (
    <section className='card-box'>
      <header className='flex card-header'>
        <div className='client-name'>{order[0].clientName}</div>
      </header>

      <main className='main-card-area'>
        {order.map((orderItem, index) => {
          return (
            <div className='card-body flex' key={index}>
              <div className='flex'>
                {place === 'kitchen' ?
                  <input className='input-item' type='checkbox' /> : false
                }
                <div>{orderItem.item}</div>
              </div>

              <aside className='burger-options flex'>
                <div>OVO</div>
                <div> QUEIJO</div>
                {orderItem.chosenOption !== undefined ?
                  <div>
                    {(orderItem.chosenOption).toUpperCase()}
                  </div> : false
                }
              </aside>
            </div>
          )
        })}
      </main>

      <footer className='flex'>
        <div className='card-footer-btn flex'>Mesa {order[0].tableNumber}</div>
        <div className='card-footer-btn flex'>
          <img
            src={require('../../assets/clock (3).png')}
            alt='Horário'
            className='clock-img' />
          <span>Horário</span>

        </div>
        <button
          className='card-footer-btn ready-btn'
          onClick={() => handleClick(orderID, order)} >
          {place === 'kitchen' ?
            'Pronto' : 'Entregue'}
        </button>
      </footer>
    </section >
  )
}

export default OrderCard;