import React, { useState} from "react";
import axios from 'axios'; 
import './ExpenseForm.css';
import TextInput from '../utils/TextInput';
import RadioButton from '../utils/RadioButton';

const ExpenseForm=()=>{
 const initialState = {name:'', amount:'', description:'', repeats:'', date:'', expenseType:'expense', expense:'expense', income:'income' };
 const [expense, setExpense] = useState(initialState);

 const handleChange = (e)=>{
  setExpense({...expense,[e.target.name]:e.target.value});
 }
 const handleSubmit=(e)=>{
   e.preventDefault();
   if(!expense.name || !expense.amount  ) return;   
   const saveExpense= async ()=>{
    try{
     await axios.post('/exp/addExpense/', expense);    
    }catch(error){console.log('ExpenseForm, could not save the expense', error)}
   }//saveExpense
   saveExpense();
   setExpense(initialState);
 }

 return(
  <div>
   <form className="expensesForm" onSubmit={handleSubmit}>
    <span className="radioBtns" onChange={handleChange}>
      <RadioButton divCN="input-radio" inputType="radio" inputID="expensepay" name="expenseType" value={expense.expense}  labelID="expenseLabel" htmlFor="expensepay" labelText="Add Expense" />
      <RadioButton divCN="input-radio" inputType="radio" inputID="income" name="expenseType" value={expense.income}  labelID="incomeLabel" htmlFor="income" labelText="Add Income" />      
    </span>
    <TextInput divCN="form-group" labelText="Date: " name="date"  type="date" value={expense.date} onChange={handleChange}  inputCN="form-control" required="required"/>
    <TextInput divCN="form-group" labelText="Name: " name="name"  type="text" value={expense.name} onChange={handleChange}  inputCN="form-control" required="required"/>
    <TextInput divCN="form-group" labelText="Amount: " name="amount"  type="text" value={expense.amount} onChange={handleChange}  inputCN="form-control" required="required"/>
    <TextInput divCN="form-group" labelText="Description: " name="description"  type="text" value={expense.description} onChange={handleChange}  inputCN="form-control"/>
    <TextInput divCN="form-group" labelText="Category : " name="repeats"  type="text" value={expense.repeats} onChange={handleChange}  inputCN="form-control"/>
    <label id="catLbl">
    Category: 
    <select name="repeats"  onChange={handleChange}>
      <option value="-1">Select Category</option>
      <option value="1">Last Balance - יתרה</option>
      <option value="2">Salary - משכורת</option>
      <option value="3">Monthly Expenses - תשלומים קבועים</option>
      <option value="6">Gas - דלק</option>
      <option value="7">Food/Babay - מזון ותינוק</option>
      <option value="8">Local Taxes - מ"מ ג'וליס</option>
      <option value="9">Electricity - חשמל</option>
      <option value="13">CC - תוספות אשראי</option>
   </select>
   </label>
    <div className="btn-group" id="ExpenseFormSubmitBtn">
     <input type="submit" value="Submit" className="btn btn-primary" />
    </div>
   </form>
  </div>
 );
}

export default ExpenseForm;