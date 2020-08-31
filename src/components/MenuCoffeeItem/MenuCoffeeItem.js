import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './style.css';

function MenuCoffeeItem({ menuCoffee, addItemToOrder }) {
  return (
    <section className='menu-box'>
      <div className='menu-title'>
        MENU
      </div>
      <section className='menu-item-box'>
        {menuCoffee.map((item, index) =>
          <MenuItem
            className='menu-btn-coffee'
            item={item}
            key={index}
            imgUrl={require(`../../assets/coffee${index}.png`)}
            addItemToOrder={addItemToOrder} />)}
      </section>
    </section>
  );
}

export default MenuCoffeeItem;
