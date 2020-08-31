import React from 'react';
import Header from '../Header/Header';
import './style.css'
import OrderCard from '../OrderCard/OrderCard';

function KitchenContent({ place, ordersList, markOrderAsReady }) {
  return (
    <div>
      <Header place={place} />
      <main className='main-kitchen-area'>
        <div className='kitchen-title-box'>
          <h2>
            <img
              className='hourglass-img'
              src={require('../../assets/hourglass.png')}
              alt='Hourglass' />
            Pedidos Pendentes
           </h2>
        </div>

        <section className='card-area'>
          {ordersList.map(order => <OrderCard
            key={ordersList.id}
            place='kitchen'
            order={order.order}
            orderID={order.id}
            handleClick={markOrderAsReady}
          />)}
        </section>
      </main>
    </div>

  );
}

export default KitchenContent;
