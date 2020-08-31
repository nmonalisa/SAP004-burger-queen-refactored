import React from 'react';
import './style.css';

function DeleteItem({ itemID, deleteItem }) {
  return (
    <img src={require('../../assets/trash.png')} alt='Delete' className='delete' onClick={() => deleteItem(itemID)} />
  );
}

export default DeleteItem;