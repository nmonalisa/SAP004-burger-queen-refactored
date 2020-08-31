import React from 'react';
import { withRouter } from "react-router-dom";
import { auth } from '../../config/firebase';

const SignOut = ({ history, className, src }) => {
  const signOut = () => {
    auth.signOut().then(() => {
      history.push('/')
    }).catch(error => {
      console.log(error)
    });
  }

  return (
    <figure >
      <img className={className}
        src={src}
        alt="Sair"
        onClick={signOut}
      />
    </figure>
  )
}

export default withRouter(SignOut);