import React from 'react';
import { Link } from 'react-router-dom';
import HomeImages from '../../components/HomeImages/HomeImages';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

function LoginContent({
  email, setEmail,
  pass, setPass,
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
          <Button
            handleCLick={validateAndSendData}
            name='Entrar' />
          {error ? <div className='error-message'> {error}</div> : null}
        </form>

        <p className='link-box white-font'>
          Não possui registro?
           <Link to='/register' className='white-font'>Cadastrar!</Link>
        </p>
      </section>
    </main>
  );
}

export default LoginContent;
