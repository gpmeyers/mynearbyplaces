import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HomeNavBar, HomePage, Login, LoginNavBar, Signup, Places, AddPage } from './components';

const App = () => {
  const [allPlaces, setAllPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  let searchPlaces = (data) => {
    let matches = [];
    for(let i = 0; i < allPlaces.length; i++){
      if(allPlaces[i].city === data.city && allPlaces[i].state === data.state){
        matches.push(allPlaces[i]);
      }
    }

    setPlaces(matches);
  }

  let addPlace = (data) => {
    let list = [...allPlaces];
    list.push(data);
    setAllPlaces(list);
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

  let addReview = (data, review) => {
    let list = [...allPlaces];

    for(let i = 0; i < list.length; i++){
      if(list[i].name === data.name && list[i].city === data.city && list[i].state === data.state){
        list[i].reviews.push(review);
      }
    }

    setAllPlaces(list);

    list = [...places];

    for(let i = 0; i < list.length; i++){
      if(list[i].name === data.name && list[i].city === data.city && list[i].state === data.state){
        list[i].reviews.push(review);
      }
    }

    setPlaces(list);

    console.log(places);
  }
  
  return (
    <Router>
      <Switch>
        <Route exact path="/mynearbyplaces">
          <HomeNavBar />
          <HomePage sendData={searchPlaces} />
          <AddPage sendData={addPlace} />
          <Places places={places} remove={removePlace} addReview={addReview} />
        </Route>
        <Route path="/login">
          <LoginNavBar />
          <Login />
        </Route>
        <Route path="/signup">
          <LoginNavBar />
          <Signup />
        </Route>
        <Route path="/add">
          <LoginNavBar />
          <AddPage sendData={addPlace} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;