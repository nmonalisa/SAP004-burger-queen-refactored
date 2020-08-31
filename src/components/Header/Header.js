import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import '../SignOut/SignOut'
import SignOut from '../SignOut/SignOut';


function Header({ place }) {

  return (
    <header className='header-page flex' >
      <img className='logotype' src={require('../../assets/logotipo.png')} alt='Logotipo' />
      <div className='flex'>
        <div>
          {place === 'saloon' ?
            <>
              <Link className='link' to='/saloon'> Pedido </Link>
              <Link className='link' to='/delivery'>Entregas </Link>
            </> : false
          }
        </div>
        <SignOut className='log-out' src={require('../../assets/logOut.png')}
          alt='LogOut' />
      </div>
    </header>
  );
}

export default Header;
