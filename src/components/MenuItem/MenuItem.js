import React from 'react';
import './style.css';

function MenuItem({ item, addItemToOrder, className, imgUrl }) {
  return (
    <button className={className} onClick={() => addItemToOrder(item)}>
      <img src={imgUrl} alt='Img' className='item-icon' />
      <div>{item.item} </div>
      <div>R${item.price}</div>
    </button>
  );
}

export default MenuItem;