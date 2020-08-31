import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Saloon from '../src/Pages/Saloon/Saloon';
import Login from '../src/Pages/Login/Login';
import Register from '../src/Pages/Register/Register';
import Kitchen from '../src/Pages/Kitchen/Kitchen';
import Delivery from '../src/Pages/Delivery/Delivery';

import './App.css';

const App = () => {
  return (<Router>
    <Switch>
      <Route path="/"
        exact >
        <Login />
      </Route>
      <Route path="/register" >
        <Register />
      </Route>
      <Route path="/saloon" >
        <Saloon />
      </Route>
      <Route path="/kitchen" >
        <Kitchen />
      </Route>
      <Route path="/delivery">
        <Delivery />
      </Route>
    </Switch>
  </Router>
  )
}

export default App