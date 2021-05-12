import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/pages/Home'
import Navigation from './components/Navigation/Navigation'
import MonthView from './components/MonthView/MonthView'
import ExpenseEdit from './components/ExpenseEdit/ExpenseEdit'
import ExpensesTable from './components/ExpensesTable/ExpensesTable'
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
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
