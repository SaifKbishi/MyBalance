import React from "react";
// import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation(){
 return(
  <>  
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
          <li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/addExpense">New Expense</NavLink></li>
          <li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/viewbymonth">Month View</NavLink></li>          
          <li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/allExpenses">Year View</NavLink></li>          
          <li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/allExpenses">Charts</NavLink></li>          
        </ul>
      </div>
    </nav>
  </>
 );
}

export default Navigation;