import React, { useState, useEffect} from "react";
import axios from 'axios'; 
import './ExpenseEdit.css';
import TextInput from '../utils/TextInput';
import RadioButton from '../utils/RadioButton';
import { Button } from "react-bootstrap";

const ExpenseEdit=(props)=>{
// const ExpenseEdit=(history, match)=>{
const initialState = {name:'', amount:'', description:'', repeats:'', date:'', expenseType:'', expense:'expense', income:'income' };
const [expense, setExpense] = useState(initialState);
const source = axios.CancelToken.source();

  const getExpenseItem = async ()=>{
    try{
      const response = await axios.get(`/exp/getExpenseByID/${props.match.params._id}`);//get expense by ID
      // const response = await axios.get(`/exp/getExpenseByID/${match.params._id}`, {cancelToken: source.token});//get expense by ID
      setExpense(response.data);
    }catch(error){if(axios.isCancel(error)){console.log('axios cancelled')}else{console.log('error editing: ', error)}}
  }//getExpenseItem

  useEffect( ()=>{    
    getExpenseItem();

    // return () => {
    //   source.cancel();
    // }
  },[props.match.params._id]);//useEffect
  // },[match.params._id]);//useEffect

 const handleChange = (e)=>{
  setExpense({...expense,[e.target.name]:e.target.value});
 }

 const handleEditSubmit=(e)=>{
   e.preventDefault();
   if(!expense.name || !expense.amount ) return;   
   const saveExpense= async ()=>{
    try{
     await axios.patch(`/exp/updateExpense/${expense._id}`, expense);
     console.log('edit is done');
     setExpense(initialState);
    }catch(error){console.log('ExpenseEdit, could not save the expense', error)}
   }//saveExpense
   props.history.goBack();
   saveExpense();
 }
 const handleDelete= async (e)=>{
  e.preventDefault();
  try{
    await axios.delete(`/exp/deleteExpense/${expense._id}`);
    console.log('delete is done');
    setExpense(initialState);
  }catch(error){console.log('delete, could not save the expense', error)}
  props.history.goBack();
 }

 return(
  <div>
    <h2>Editing {expense.name}</h2>
   <form className="expensesForm" onSubmit={handleEditSubmit}>
    <span className="radioBtns" onChange={handleChange}>{/*Radio buttons*/}    
      <RadioButton divCN="input-radio" inputType="radio" inputID="expensepay" name="expenseType" value={expense.expense}  labelID="expenseLabel" htmlFor="expensepay" labelText="Add Expense"/>
      <RadioButton divCN="input-radio" inputType="radio" inputID="income" name="expenseType" value={expense.income}  labelID="incomeLabel" htmlFor="income" labelText="Add Income"/>      
    </span>
    <TextInput divCN="form-group" labelText="Date: " name="date"  type="date" value={expense.date} onChange={handleChange}  inputCN="form-control" />
    <TextInput divCN="form-group" labelText="Name: " name="name"  type="text" value={expense.name} onChange={handleChange}  inputCN="form-control" required="required"/>
    <TextInput divCN="form-group" labelText="Amount: " name="amount"  type="text" value={expense.amount} onChange={handleChange}  inputCN="form-control" required="required"/>
    <TextInput divCN="form-group" labelText="Description: " name="description"  type="text" value={expense.description} onChange={handleChange}  inputCN="form-control"/>
    <TextInput divCN="form-group" labelText="Category: " name="repeats"  type="text" value={expense.repeats} onChange={handleChange}  inputCN="form-control"/>
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
   {/* <div className="btn-group"> */}
    <div className="editFormButtons">
     {/* <input type="submit" value="Submit" className="btn btn-primary" /> */}
     <Button type="submit" className="btn btn-primary" >Save</Button>{' '}     
     <Button type="submit" variant="warning" value="Delete" className="btn btn-primary" onClick={(e)=>handleDelete(e)}>Delete</Button>     
    </div> 
   </form>
   
  </div>
 );
}

export default ExpenseEdit;