import React, { useState } from 'react';

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
  const [allPlaces, setAllPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  let searchPlaces = (data) => {
    let matches = [];
    
    matches = api.search(data.name, data.location);

    console.log(matches);

    setPlaces(matches);
  }

  let removePlace = (data) => {
    for(let i = 0; i < allPlaces.length; i++){
      if(allPlaces[i].name === data.name && allPlaces[i].city === data.city && allPlaces[i].state === data.state){
        let list = [...allPlaces];
        list.splice(i, 1);
        setAllPlaces(list);
      }
    }

    for(let i = 0; i < places.length; i++){
      if(places[i].name === data.name && places[i].city === data.city && places[i].state === data.state){
        let list = [...places];
        list.splice(i, 1);
        setPlaces(list);
      }
    }
  }

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