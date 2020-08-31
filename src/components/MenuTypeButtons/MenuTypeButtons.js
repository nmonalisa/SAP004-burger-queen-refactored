import React from 'react';
import './style.css';

function MenuTypeButtons({ showMenuDay, showMenuCoffee }) {
  return (
    <section className='menu-type-btn-box'>
      <button
        className='coffee-btn menu-type-btn'
        onClick={showMenuCoffee}>CAFÉ</button>
      <button
        className='day-btn menu-type-btn'
        onClick={showMenuDay}>DIA</button>
    </section>
  );
}

export default MenuTypeButtons;
