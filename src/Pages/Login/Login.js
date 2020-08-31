import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { auth, db } from '../../config/firebase';
import authMainErrors from '../../Errors/authMainErrors';
import LoginContent from '../../components/LoginContent/LoginContent'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState(null)
  const database = db.collection('workers')


  const validateAndSendData = (event) => {
    event.preventDefault()
    if (email === '' || pass === '') {
      setError('Campos vazios. Preencha os dados!')
    } else {
      signIn(email, pass)
    }
  }

  const redirectToSectorUser = userID => {
    database.doc(userID).get()
      .then(doc => {
        const userSector = doc.data().sector
        history.push(`/${userSector}`)
      })
  }

  const signIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
      .then((result) => redirectToSectorUser(result.user.uid))
      .catch(error => {
        return authMainErrors[error.code] ?
          setError(authMainErrors[error.code]) :
          setError(authMainErrors['tryAgain'])
      })
  }


  return (
    <LoginContent
      email={email}
      setEmail={setEmail}
      pass={pass}
      setPass={setPass}
      error={error}
      setError={setError}
      validateAndSendData={validateAndSendData}
    />
  )
}
export default withRouter(Login);