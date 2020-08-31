import React from 'react';
import { Link } from 'react-router-dom';
import HomeImages from '../../components/HomeImages/HomeImages';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import './style.css';

function RegisterContent({
  email, setEmail,
  pass, setPass,
  passAgain, setPassAgain,
  name, setName,
  sector, setSector,
  error,
  validateAndSendData
}) {
  return (
    <main className='register-page-box'>
      <HomeImages />
      <section className='form-section'>
        <form className='form-box'>
          <Input
            className='form-item'
            onChange={e => setName(e.target.value)}
            value={name}
            type='text'
            placeholder='Nome' />
          <Input
            className='form-item'
            onChange={e => setEmail(e.target.value)}
            value={email}
            type='email'
            placeholder='E-mail' />
          <Input
            className='form-item'
            onChange={e => setPass(e.target.value)}
            value={pass}
            type='password'
            placeholder='Senha' />
          <Input
            className='form-item'
            onChange={e => setPassAgain(e.target.value)}
            value={passAgain}
            type='password'
            placeholder='Confirme a senha' />
          <RegisterForm
            sector={sector}
            setSector={setSector} />
          <Button
            handleCLick={validateAndSendData}
            name='Registrar' />
          {error ? <div className='error-message'> {error}</div> : null}
        </form>

        <p className='link-box white-font'>
          Já possui registro?
           <Link to='/' className='white-font'>Logar!</Link>
        </p>
      </section>
    </main>
  );
}

export default RegisterContent;
