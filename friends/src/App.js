import React from 'react';
import './App.css';
import {Route, Link} from "react-router-dom";
import FormikLoginForm from './Components/FormikLoginForm';
import PrivateRoute from './Components/PrivateRoute';
import FriendsList from './Components/FriendsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
            <li>
              <Link className="App-link" to="/login">Login</Link>
            </li>
            <li>
              <Link className="App-link" to="/protected">Protected Page</Link>
            </li>
        </ul>
      </header>
      <Route path="/login" component={FormikLoginForm} />
      <PrivateRoute exact path="/" component={FriendsList}/>
    </div>
  );
}

export default App;
