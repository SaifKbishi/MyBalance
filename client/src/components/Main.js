import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MonthView from './MonthView/MonthView';
import ExpenseEdit from './ExpenseEdit/ExpenseEdit';
import ExpenseForm2 from './ExpenseForm/ExpenseForm2';
import ExpensesTable from './ExpensesTable/ExpensesTable';
import Charts from './Charts/Charts';
// import ExpensesTable2 from './ExpensesTable/ExpensesTable2';

import Home from './pages/Home';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import Register from './Register/Register';
import Welcome from './Welcome/Welcome';
import BoardUser from './BoardRoles/BoardUser';
import BoardAdmin  from './BoardRoles/BoardAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
 return(
   <Switch>
    <Route exact path={['/', '/Welcome']} component={Welcome}/>
    <Route exact path={['/Home']} component={Home}/>
    <Route exact path={'/viewbymonth/'} component={MonthView}/>
    <Route exact path={'/viewbymonth/:month'} component={MonthView}/>
    <Route exact path={'/allExpenses/'} component={ExpensesTable}/>
    <Route exact path={'/charts/'} component={Charts}/>
    {/* <Route exact path={'/addExpense/'} component={ExpenseForm}/> */}
    <Route exact path={'/addExpense/'} component={ExpenseForm2}/>
    <Route exact path={'/updateExpense/:_id/'} component={ExpenseEdit}/>    
    <Route exact path={'/login'} component={Login}/>
    <Route exact path={'/register'} component={Register}/>
    <Route exact path={'/profile'} component={Profile}/>
    <Route exact path={'/user'} component={BoardUser}/>
    <Route exact path={'/admin'} component={BoardAdmin}/>
   </Switch>
 );  
}

export default Main;
