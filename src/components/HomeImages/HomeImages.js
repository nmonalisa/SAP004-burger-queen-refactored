import React from 'react';
import Logotype from '../../../src/assets/logo-green.png';
import BurguerImg from '../../../src/assets/burger-circle.png';
import './style.css'


const HomeImages = () => {
  return (
    <section className='home-images-box'>
      <img className='logotype-img' src={Logotype} alt="Logotipo" />
      <img className='burger-img' src={BurguerImg} alt="Imagem de hamburguer" />
    </section>
  );
}

export default HomeImages;
