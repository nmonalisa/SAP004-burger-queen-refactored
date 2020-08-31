import React, { useState, useEffect } from 'react';
import SaloonContent from '../../components/SaloonPageContent/SaloonContent'
import AllMenuDay from '../../menuData/menuDay/menuDay'
import AllMenuCoffee from '../../menuData/menuCoffee/menuCoffee'
import { db } from '../../config/firebase'

function Saloon() {
  const [menuDay, setMenuDay] = useState(false)
  const [menuCoffee, setMenuCoffee] = useState(AllMenuCoffee)
  const orderTable = useState(true)
  const [order, setOrder] = useState([])
  const [clientName, setClientName] = useState('')
  const [tableNumber, setTableNumber] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const database = db.collection('orders')

  useEffect(() => {
    calculateTotalPrice()
  }, [order])

  const showMenuDay = () => {
    setMenuCoffee(false)
    setMenuDay(AllMenuDay)
  }

  const showMenuCoffee = () => {
    setMenuCoffee(AllMenuCoffee)
    setMenuDay(false)
  }

  const addItemToOrder = item => {
    setOrder([...order, { ...item, quantity: 1 }])
  }

  const addQuantityToItem = () => {
    return (itemID, counter) => {
      order[itemID].quantity = counter
    }
  }

  const deleteItem = () => {
    return (itemID) => {
      const newData = order.filter((item, index) => index !== itemID)
      setOrder(newData)
    }
  }

  const addClientInfosToOrder = () => {
    order.map(item => {
      item.clientName = clientName;
      item.tableNumber = tableNumber;
      return (item)
    })
  }

  const validateAndSendData = (clientName, tableNumber, order) => {
    if (clientName === false || null || undefined || '') {
      alert('Digite as informações do cliente')
    } else if (tableNumber === false || null || undefined || '') {
      alert('Digite as informações do cliente')
    } else if (order.length === 0) {
      alert('Pedido vazio. Você quer mesmo enviar o pedido?')
    } else {
      sendOrderToDataBase(order)
    }
  }

  const calculateTotalPrice = () => {
    const productList = []
    let sumProducts = 0
    order.map(item => productList.push(item.quantity * item.price))
    productList.map(item => sumProducts += item)
    setTotalPrice(sumProducts)
  }

  const cleanOrder = () => setOrder([])

  const sendOrderToDataBase = () => {
    addClientInfosToOrder()
    database.add({ order })
      .then(() => {
        console.log('Pedido:', order);
        setOrder([]);
        setClientName('');
        setTableNumber(false)
      })
      .catch(() => alert('Não foi possível enviar o pedido para a cozinha. Tente novamente!'))
  }

  return (
    <div className="App">
      <SaloonContent
        menuDay={menuDay}
        menuCoffee={menuCoffee}
        orderTable={orderTable}
        showMenuDay={() => showMenuDay()}
        showMenuCoffee={() => showMenuCoffee()}
        addItemToOrder={addItemToOrder}
        order={order}
        clientName={clientName}
        tableNumber={tableNumber}
        setClientName={setClientName}
        setTableNumber={setTableNumber}
        addQuantityToItem={addQuantityToItem()}
        deleteItem={deleteItem()}
        totalPrice={totalPrice}
        calculateTotalPrice={() => calculateTotalPrice()}
        cleanOrder={() => cleanOrder()}
        validateAndSendData={() => validateAndSendData(clientName, tableNumber, order)}
        place={'saloon'}
      />
    </div>
  );
}

export default Saloon;
