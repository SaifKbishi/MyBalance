import React, { useState, useEffect} from "react";
import axios from 'axios'; 
import './ExpenseEdit.css';

const ExpenseEdit=(props)=>{
 const initialState = {name:'', amount:'', description:'', repeats:'', date:'', expenseType:'', expense:'expense', income:'income' };
 const [expense, setExpense] = useState(initialState);

 useEffect( ()=>{
   console.log('10 ExpenseEdit: ',props)
  const getExpenseItem = async ()=>{
   try{
    const response = await axios.get(`/exp/getExpenseByID/${props.match.params._id}`);
    console.log('13 edit', response.data);
    setExpense(response.data);
   }catch(error){console.log('error editing: ', error)}
  }
  getExpenseItem();
 },[]);


 const handleChange = (e)=>{
  console.log('10',e.target.name,'value:', e.target.value, '     ',e.target);
  setExpense({...expense,[e.target.name]:e.target.value});
  console.log('12',expense)  
 }

 const handleSubmit=(e)=>{
  console.log('handleSubmit 5');
   e.preventDefault();
  //  if(!expense.name || !expense.amount || !expense.date ) return;   
   const saveExpense= async ()=>{
    try{
     console.log('expnse 33', expense);
     await axios.patch('/exp/updateExpense/', expense);    
    }catch(error){console.log('ExpenseForm, could not save the expense', error)}
   }//saveExpense
   saveExpense();
 }

 return(
  <div>
   <form className="expensesForm" onSubmit={handleSubmit}>
    <span className="radioBtns" onChange={handleChange}>
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