import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import FormikLoginForm from './Components/FormikLoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/login" component={FormikLoginForm} />
      </header>
    </div>
  );
}

export default App;
