import React from "react";
import { Route, Switch } from "react-router-dom";
import ExpenseEdit from './ExpenseEdit/ExpenseEdit';
import ExpensesTable from './ExpensesTable/ExpensesTable';
import ExpensesTable2 from './ExpensesTable/ExpensesTable2';
import MonthView from './MonthView/MonthView';
import ExpenseForm from './ExpenseForm/ExpenseForm'
import Home from './pages/Home'

function Main() {
 return(
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/viewbymonth/" component={MonthView}/>
     <Route exact path="/allExpenses/" component={ExpensesTable2}/>
     <Route exact path="/addExpense/" component={ExpenseForm}/>
     {/* <Route exact path="/todos/:_id" component={TodoDelete}/> */}
     <Route exact path="/updateExpense/:_id/" component={ExpenseEdit}/>
   </Switch>
 );  
}

export default Main;
