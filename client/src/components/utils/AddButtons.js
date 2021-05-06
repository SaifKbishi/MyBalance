import React  from 'react';
import './utilsStyle.css';

const AddButtons =()=>{

 const AddExpense = ()=>{
  console.log('AddExpense, This should update the choosen month document and set expenseType to expense')
 }
 const AddIncome = ()=>{
  console.log('AddIncome, This should update the choosen month document and set expenseType to income')
 }

 return(
  <div className="expenseBtns">
   <button onClick={AddExpense} className="btn btn-danger">Add Expense</button>
   <button onClick={AddIncome} className="btn btn-success">Add Income</button>
  </div>
 );
}

export default AddButtons;