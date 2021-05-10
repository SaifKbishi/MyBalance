import React  from 'react';
// import './home.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpensesTable from '../ExpensesTable/ExpensesTable'
// import ExpenseEdit from '../ExpenseEdit/ExpenseEdit'

const Home=(props)=>{
 console.log('props:', props)
 return(
  console.log(),
  <div className="homepage">
   <ExpenseForm/>
   <hr/>
   <ExpensesTable />
  </div>
 );
}

export default Home;