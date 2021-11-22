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
          <h4 style={{paddingTop:20, fontWeight:'bold'}}> My Balance</h4>
          <div className="neonEffect"></div>
          <Main />
        </div>
      </Router>  
    </div>
  );
}

export default App;

