import React from 'react';
import './style.css'
import OrderTableHeader from '../OrderTableHeader/OrderTableHeader';
import OrderTableRow from '../OrderTableRow/OrderTableRow';
import OrderTableFooter from '../OrderTableFooter/OrderTableFooter';
import ClientInfos from '../ClientInfos/ClientInfos';

function OrderTable({
  order,
  clientName, tableNumber,
  setClientName, setTableNumber,
  addQuantityToItem,
  deleteItem,
  totalPrice,
  calculateTotalPrice,
  cleanOrder,
  validateAndSendData,
  setBurgerOptions,
  setBurgerAdditionals
}) {
  return (
    <section className='order-box'>
      <div className='order-title'>
        PEDIDOS
      </div>
      <section className='order-table-box'>
        <ClientInfos
          clientName={clientName}
          tableNumber={tableNumber}
          setClientName={setClientName}
          setTableNumber={setTableNumber} />
        <OrderTableHeader />
        <main>
          {order.map((item, index) => <OrderTableRow
            item={item}
            key={index}
            itemID={index}
            addQuantityToItem={addQuantityToItem}
            deleteItem={deleteItem}
            calculateTotalPrice={calculateTotalPrice}
            setBurgerOptions={setBurgerOptions}
            setBurgerAdditionals={setBurgerAdditionals}
          />
          )
          }
        </main>
        <OrderTableFooter
          order={order}
          totalPrice={totalPrice}
          cleanOrder={cleanOrder}
          validateAndSendData={validateAndSendData}
        />
      </section>
    </section>
  );
}

export default OrderTable;
