import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Main from './components/Main'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './normalize.css';

function App() {
  return (
    document.title = 'My Balance',
    <div className="App">      
      <Router>
        <Navigation/>
        <div className="container">
          <h1>My Balance</h1>
          <hr/>
          <Main />
        </div>
      </Router>  
    </div>
  );
}

export default App;

