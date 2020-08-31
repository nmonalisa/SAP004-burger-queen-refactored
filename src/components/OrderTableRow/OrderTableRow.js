import React from 'react';
import Counter from '../Counter/Counter';
import './style.css';


function OrderTableRow({
  item,
  itemID,
  addQuantityToItem,
  deleteItem,
  calculateTotalPrice }) {
  return (
    <div className='table-row-box'>
      <div>{item.item}</div>
      <div>{item.options}</div>
      <div>{item.additional}</div>
      <div>{item.index}</div>
      <Counter
        itemID={itemID}
        addQuantityToItem={addQuantityToItem}
        deleteItem={deleteItem}
        calculateTotalPrice={calculateTotalPrice}
      />
    </div>
  );
}

export default OrderTableRow;