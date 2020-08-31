import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './style.css';

function MenuDayItem({ menuDay, addItemToOrder }) {
  return (
    <section className='menu-box'>
      <div className='menu-title'>
        MENU
      </div>
      <section className={'menu-item-box'}>
        {menuDay.map((item, index) =>
          <MenuItem
            className='menu-btn-day'
            item={item}
            key={index}
            imgUrl={require(`../../assets/day${index}.png`)}
            addItemToOrder={addItemToOrder} />)}
      </section>
    </section>
  );
}

export default MenuDayItem;
