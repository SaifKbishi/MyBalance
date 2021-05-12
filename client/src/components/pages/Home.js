import React  from 'react';
// import './home.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpensesTable from '../ExpensesTable/ExpensesTable'
// import ExpenseEdit from '../ExpenseEdit/ExpenseEdit'

function Home() { 
 
 return(
  <div className="homepage">
   <h3>Welcome to MyBalance Home page</h3>   
   <ExpenseForm/>
   <hr/>
   <ExpensesTable />
  </div>
 );
}

export default Home;