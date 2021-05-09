import React, { useState, useEffect} from "react";
import axios from 'axios'; 
import './ExpenseEdit.css';
// import ExpensesTable from '../ExpensesTable/ExpensesTable'

const ExpenseEdit=(props)=>{
 const initialState = {name:'', amount:'', description:'', repeats:'', date:'', expenseType:'', expense:'expense', income:'income' };
 const [expense, setExpense] = useState(initialState);

 useEffect( ()=>{
   console.log('EE 10 ExpenseEdit: ',props)
  const getExpenseItem = async ()=>{
   try{
     console.log('props.match.params._id:', props.match.params._id)
    const response = await axios.get(`/exp/getExpenseByID/${props.match.params._id}`);//get expense by ID
    console.log('13 edit', response.data);
    setExpense(response.data);
   }catch(error){console.log('error editing: ', error)}
  }
  getExpenseItem();
 },[]);

 const handleChange = (e)=>{
  console.log('EE 10',e.target.name,'value:', e.target.value, '     ',e.target);
  setExpense({...expense,[e.target.name]:e.target.value});
  console.log('12',expense);
 }

 const handleEditSubmit=(e)=>{
  console.log('handleEditSubmit 29');
  //  e.preventDefault();
   if(!expense.name || !expense.amount ) return;   
   const saveExpense= async ()=>{
    try{
     console.log('expense 35', expense._id);
     await axios.patch(`/exp/updateExpense/${expense._id}`, expense); 
     console.log(expense)
     console.log('done')   ;
    }catch(error){console.log('ExpenseEdit, could not save the expense', error)}
   }//saveExpense
   saveExpense();
 }

 return(
  <div>
    <h1>Edit {expense.name}</h1>
   <form className="expensesForm" onSubmit={handleEditSubmit}>
    <span className="radioBtns" onChange={handleChange}>{/*Radio buttons*/}
      <div className="input-radio"> 
        <input type="radio" id="expensepay"
        name="expenseType"
        value={expense.expense} 
        /> 
        <label id="expenseLabel" htmlFor ="expensepay">Add Expense</label>
      </div>
      <div className="input-radio">
        <input type="radio" id="income"
        name="expenseType" 
        value={expense.income} />
        <label id="incomeLabel" htmlFor ="income">Add Income</label>
      </div>
    </span>
    
    <div className="form-group">
     <label>Date: </label>
     <input name="date" type="date" value={expense.date} onChange={handleChange} className="form-control" />
    </div>
    <div className="form-group">
     <label>Name: </label>
     <input name="name" type="text" value={expense.name} onChange={handleChange} className="form-control" />
    </div>
    <div className="form-group">
     <label>Amount: </label>
     <input name="amount" type="text" value={expense.amount} onChange={handleChange} className="form-control" />
    </div>
    <div className="form-group">
     <label>Description: </label>
     <input name="description" type="text" value={expense.description} onChange={handleChange} className="form-control" />
    </div>
    <div className="form-group">
     <label>Repeats: </label>
     <input name="repeats" type="text" value={expense.repeats} onChange={handleChange} className="form-control" />
    </div>
    <div className="btn-group">
     <input type="submit" value="Submit" className="btn btn-primary" />
    </div>
   </form>
  
  
  </div>
 );
}

export default ExpenseEdit;