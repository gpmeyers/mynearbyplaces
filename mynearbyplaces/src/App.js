import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HomeNavBar, HomePage, Login, LoginNavBar, Signup } from './components';

const App = () => {
  const [city, setCity] = useState('Tucson');
  const [state, setState] = useState('Arizona')

  let onDataReceivedFromHome = (data) => {
  }
  
  return (
    <Router>
      <Switch>
        <Route exact path="/mynearbyplaces">
          <HomeNavBar />
          <HomePage sendData={onDataReceivedFromHome} />
        </Route>
        <Route exact path="/login">
          <LoginNavBar />
          <Login />
        </Route>
        <Route exact path="/signup">
          <LoginNavBar />
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;