import Login from './components/login';
import Signup from './components/signup';
import './App.css';
import Shop from './components/shop';
import Admin from './components/admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/signup" >
          <Signup />
        </Route>
        <Route path="/shop" >
          <Shop />
        </Route>
        <Route path="/admin" >
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
