import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { auth, db } from '../../config/firebase';
import registerMainErrors from '../../Errors/registerMainErrors';
import RegisterContent from '../../components/RegisterPageContent/RegisterContent'

const Register = ({ history }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [passAgain, setPassAgain] = useState('')
  const [name, setName] = useState('')
  const [sector, setSector] = useState('')
  const [error, setError] = useState(null)
  const database = db.collection('workers')

  const validateAndSendData = (event) => {
    event.preventDefault()
    if (name === '' || email === '' || pass === '' || passAgain === '') {
      setError('Campos vazios. Preencha os dados!')
    } else if (pass.length < 6) {
      setError('A senha deve conter no mínimo 6 caracteres.')
    } else if (pass !== passAgain) {
      setError('As senhas não conferem!')
    } else if (sector === null || sector === '') {
      setError('Preencha o campo setor.')
    } else {
      registerUser(email, pass)
    }
  }

  const saveUserCredentials = userID => {
    return database.doc(userID)
      .set({ name, sector })
  }

  const registerUser = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        saveUserCredentials(result.user.uid)
        console.log(sector)
        history.push(`/${sector}`)
      })
      .catch(error => {
        return registerMainErrors[error.code] ?
          setError(registerMainErrors[error.code]) :
          setError(registerMainErrors['tryAgain'])
      })
  }

  return (
    <RegisterContent
      email={email}
      setEmail={setEmail}
      pass={pass}
      setPass={setPass}
      passAgain={passAgain}
      setPassAgain={setPassAgain}
      name={name}
      setName={setName}
      sector={sector}
      setSector={setSector}
      error={error}
      setError={setError}
      validateAndSendData={validateAndSendData}
    />
  )
}
export default withRouter(Register);