import React, { useState, useEffect } from 'react';
import KitchenContent from '../../components/KitchenContent/KitchenContent'
import { db } from '../../config/firebase'


function Kitchen() {
  const database = db.collection('orders');
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

  const markOrderAsReady = () => {
    return (orderID, order) => {
      deleteOrderOfLocalList(orderID)
      deleteOrderOfDatabase(orderID)
      sendOrderToReadyList(order, orderID)
    }
  }

  const deleteOrderOfDatabase = orderID => database.doc(orderID).delete();

  const sendOrderToReadyList = (order, orderID) => {
    db.collection('ready-orders').doc(orderID).set({ order });
  }

  const deleteOrderOfLocalList = orderID => {
    const filteredList = ordersList.filter(item => item.id !== orderID)
    setOrdersList(filteredList)
  }
  return (
    <div className="App">
      <KitchenContent
        place={'kitchen'}
        ordersList={ordersList}
        markOrderAsReady={markOrderAsReady()}
      />
    </div>
  )
};

export default Kitchen;
