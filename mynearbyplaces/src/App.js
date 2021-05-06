import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HomeNavBar, HomePage, Login, LoginNavBar, Signup, Places, AddPage } from './components';

import api from './communication/api';

const App = () => {
  const [places, setPlaces] = useState([]);

  let searchPlaces = async (data) => {
    const matches = await api.search(data.name, data.location);

    console.log(matches);

    setPlaces(matches);
  }

  let removePlace = (data) => {
    
  }

  useEffect(() => {

  });

  return (
    <Router>
      <Switch>
        <Route exact path="/mynearbyplaces">
          <HomeNavBar />
          <HomePage sendData={searchPlaces} />
          <Places places={places} remove={removePlace} />
        </Route>
        <Route exact path="/mynearbyplaces/login">
          <LoginNavBar />
          <Login />
        </Route>
        <Route exact path="/mynearbyplaces/signup">
          <LoginNavBar />
          <Signup />
        </Route>
        <Route exact path="/mynearbyplaces/add">
          <LoginNavBar />
          <AddPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;