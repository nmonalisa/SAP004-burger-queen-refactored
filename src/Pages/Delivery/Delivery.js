import React, { useState, useEffect } from 'react';
import DeliveryContent from '../../components/DeliveryContent/DeliveryContent'
import { db } from '../../config/firebase'


function Delivery() {
  const database = db.collection('ready-orders');
  const [ordersList, setOrdersList] = useState([])

  useEffect(() => {
    getDataBase()
  }, [])

  const getDataBase = () => {
    database.onSnapshot(snapshot => {
      const collection = snapshot.docs
      const orders = collection.map(doc => ({ id: doc.id, ...doc.data() }))
      setOrdersList(orders)
    })
  }

  const markOrderAsDelivered = () => {
    return (orderID, order) => {
      deleteOrderOfLocalList(orderID)
      deleteOrderOfDatabase(orderID)
      sendOrderToHistory(order, orderID)
    }
  }

  const deleteOrderOfDatabase = orderID => database.doc(orderID).delete();

  const sendOrderToHistory = (order, orderID) => {
    db.collection('history').doc(orderID).set({ order });
  }

  const deleteOrderOfLocalList = orderID => {
    const filteredList = ordersList.filter(item => item.id !== orderID)
    setOrdersList(filteredList)
  }
  return (
    <div className="App">
      <DeliveryContent
        ordersList={ordersList}
        markOrderAsDelivered={markOrderAsDelivered()}
      />
    </div>
  )
};

export default Delivery;
