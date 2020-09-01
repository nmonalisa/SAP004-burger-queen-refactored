import React from 'react';
import Counter from '../Counter/Counter';
import './style.css';

function OrderTableRow({
  item,
  itemID,
  addQuantityToItem,
  deleteItem,
  calculateTotalPrice,
  setBurgerOptions,
  setBurgerAdditionals,
  addCheese,
  addEgg,
}) {

  const showBurgerOptions = (optionsList, itemID) => {
    return optionsList.map((option, index) => {
      return (
        <div className='options-box' key={index}>
          <input
            type='radio'
            name={itemID}
            value={option}
            onChange={(event) => setBurgerOptions(event.target.value, itemID)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      )
    })
  }



  const showBurgerAdditionals = (addList, itemID) => {
    return addList.map((add, index) => {
      return (
        <div className='options-box' key={index}>
          <input
            type='checkbox'
            name={add}
            value={add}
            checked={add === 'ovo' ? addEgg : addCheese}
            onChange={(event) => setBurgerAdditionals(event.target.value, itemID)}
          />
          <label htmlFor={add}>{add}</label>
        </div>
      )
    })
  }


  return (
    <div className='table-row-box'>
      <div>{item.item}</div>

      {item.options === '-' ?
        <div className='option'>
          {item.options}
        </div> :
        <div className='meat-option'>
          {showBurgerOptions(item.options, itemID)}
        </div>
      }

      {item.additional === '-' ?
        <div className='option'>
          {item.options}
        </div> :
        <div className='additionals'>
          {showBurgerAdditionals(item.additional, itemID)}
        </div>
      }

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