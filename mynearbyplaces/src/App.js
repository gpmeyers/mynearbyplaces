import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { NavBar, HomePage, Login, LoginNavBar } from './components';

const App = () => {
  <Router>
    <Switch>
      <Route exact path="/">
        <NavBar />
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginNavBar />
        <Login />
      </Route>
    </Switch>
  </Router>
}

export default App;