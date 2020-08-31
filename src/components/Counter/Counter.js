import React, { useState, useEffect } from 'react';
import DeleteItem from '../DeleteItem/DeleteItem';
import './style.css';

function Counter({
  itemID,
  addQuantityToItem,
  deleteItem,
  calculateTotalPrice }) {

  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    addQuantityToItem(itemID, quantity)
    calculateTotalPrice()
  }, [quantity, addQuantityToItem, itemID, calculateTotalPrice])

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    quantity === 1 ?
      setQuantity(1) : setQuantity(quantity - 1);
  }

  return (
    <div className='counter-box'>
      <DeleteItem itemID={itemID} deleteItem={deleteItem} />
      <button
        className='counter-btn increase-btn'
        onClick={() => decreaseQuantity()}>
        -
      </button>
      <button
        className='counter-btn quantifier'>
        {quantity}
      </button>
      <button
        className='counter-btn decrease-btn'
        onClick={() => increaseQuantity()}>
        +
      </button>
    </div>
  );
}

export default Counter;