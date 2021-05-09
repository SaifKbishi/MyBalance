import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import ExpenseEdit from './ExpenseEdit/ExpenseEdit'
import Home from './pages/Home'

function Main() {
 return(
   <Switch>
     <Route exact path="/home" component={Home}/>
     {/* <Route exact path="/todos" component={TodosList}/>
     <Route exact path="/todos/new" component={CreateTodo}/>
     <Route exact path="/todos/:_id" component={TodoDelete}/> */}
     <Route exact path="/exp/updateExpense/:_id/" component={ExpenseEdit}/>
     {/* <Route exact path="/login" component={Login}/> */}
   </Switch>
 );  
}

export default Main;