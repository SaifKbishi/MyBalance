import React, { useState} from "react";
import axios from 'axios'; 
import './ExpenseForm.css';
import TextInput from '../utils/TextInput';
import RadioButton from '../utils/RadioButton';

const ExpenseForm=()=>{
 const initialState = {name:'', amount:'', description:'', repeats:'', date:'', expenseType:'expense', expense:'expense', income:'income' };
 const [expense, setExpense] = useState(initialState);

 const handleChange = (e)=>{
  console.log('10',e.target.name,'value:', e.target.value, '     ',e.target);
  setExpense({...expense,[e.target.name]:e.target.value});
  console.log('12',expense)  
 }

 const handleSubmit=(e)=>{
  console.log('handleSubmit 5');
   e.preventDefault();
   if(!expense.name || !expense.amount || !expense.date ) return;   
   const saveExpense= async ()=>{
    try{
     console.log('expnse 21', expense);
     await axios.post('/exp/addExpense/', expense);    
    }catch(error){console.log('ExpenseForm, could not save the expense', error)}
   }//saveExpense
   saveExpense();
 }

 return(
  <div>
   <form className="expensesForm" onSubmit={handleSubmit}>
    <span className="radioBtns" onChange={handleChange}>
      <RadioButton divCN="input-radio" inputType="radio" inputID="expensepay" name="expenseType" value={expense.expense}  labelID="expenseLabel" htmlFor="expensepay" labelText="Add Expense"/>
      <RadioButton divCN="input-radio" inputType="radio" inputID="income" name="expenseType" value={expense.income}  labelID="incomeLabel" htmlFor="income" labelText="Add Income"/>
      {/* <div className="input-radio">
        <input type="radio" 
        id="income"
        name="expenseType"
        value={expense.income} /> 
        <label id="incomeLabel" htmlFor="income">Add Income</label>
      </div> */}
    </span>
    <TextInput divCN="form-group" labelText="Date: " name="date"  type="date" value={expense.date} onChange={handleChange}  inputCN="form-control"/>
    <TextInput divCN="form-group" labelText="Name: " name="name"  type="text" value={expense.name} onChange={handleChange}  inputCN="form-control"/>
    <TextInput divCN="form-group" labelText="Amount: " name="amount"  type="text" value={expense.amount} onChange={handleChange}  inputCN="form-control"/>
    <TextInput divCN="form-group" labelText="Description: " name="description"  type="text" value={expense.description} onChange={handleChange}  inputCN="form-control"/>
    <TextInput divCN="form-group" labelText="Repeats: " name="repeats"  type="text" value={expense.repeats} onChange={handleChange}  inputCN="form-control"/>

    
    <div className="btn-group">
     <input type="submit" value="Submit" className="btn btn-primary" />
    </div>
   </form>
  </div>
 );
}

export default ExpenseForm;