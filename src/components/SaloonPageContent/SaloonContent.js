import React from 'react';
import Header from '../Header/Header';
import './style.css'
import MenuTypeButtons from '../MenuTypeButtons/MenuTypeButtons';
import MenuDayItem from '../MenuDayItem/MenuDayItem';
import MenuCoffeeItem from '../MenuCoffeeItem/MenuCoffeeItem';
import OrderTable from '../OrderTable/OrderTable';

function SaloonContent({
  menuDay,
  menuCoffee,
  orderTable,
  showMenuDay,
  showMenuCoffee,
  addItemToOrder,
  order,
  clientName, tableNumber,
  setClientName, setTableNumber,
  addQuantityToItem,
  deleteItem,
  totalPrice,
  calculateTotalPrice,
  cleanOrder,
  validateAndSendData,
  place
}) {
  return (
    <div>
      <Header place={place} />
      <main className='app-content-box'>
        <MenuTypeButtons
          showMenuDay={showMenuDay}
          showMenuCoffee={showMenuCoffee} />

        {!!menuDay &&
          <MenuDayItem
            menuDay={menuDay}
            addItemToOrder={addItemToOrder} />}

        {!!menuCoffee &&
          <MenuCoffeeItem
            menuCoffee={menuCoffee}
            addItemToOrder={addItemToOrder} />}

        {!!orderTable && <OrderTable
          order={order}
          clientName={clientName}
          tableNumber={tableNumber}
          setClientName={setClientName}
          setTableNumber={setTableNumber}
          addQuantityToItem={addQuantityToItem}
          deleteItem={deleteItem}
          totalPrice={totalPrice}
          calculateTotalPrice={calculateTotalPrice}
          cleanOrder={cleanOrder}
          validateAndSendData={validateAndSendData}
        />}
      </main>
    </div>
  );
}

export default SaloonContent;
