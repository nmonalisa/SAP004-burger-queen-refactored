import React from 'react';
import Header from '../Header/Header';
import './style.css'
import OrderCard from '../OrderCard/OrderCard';

function DeliveryContent({ ordersList, markOrderAsDelivered }) {
  return (
    <div>
      <Header place='saloon' />
      <main className='main-delivery-area'>
        <div className='delivery-title-box'>
          <h2>
            <img
              className='hourglass-img'
              src={require('../../assets/hourglass.png')}
              alt='Hourglass' />
            Lista de Entregas
           </h2>
        </div>

        <section className='card-area'>
          {ordersList.map(order => <OrderCard
            key={ordersList.id}
            place='delivery'
            order={order.order}
            orderID={order.id}
            handleClick={markOrderAsDelivered}
          />)}
        </section>
      </main>
    </div>

  );
}

export default DeliveryContent;
