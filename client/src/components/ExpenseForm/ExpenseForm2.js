import React, { useState} from "react";
import axios from 'axios'; 
import './ExpenseForm2.css';
import TextInput from '../utils/TextInput';
import RadioButton from '../utils/RadioButton';
import RadioButton2 from '../utils/RadioButton2';
import CheckBox from '../utils/CheckBox';
import data from '../utils/CategoriesData';
import CategoryForm from '../CategoryForm/CategoryForm'

const ExpenseForm=()=>{
 const initialState = {name:'', amount:'', description:'', repeats:'', date:'', expenseType:'expense', expense:'expense', income:'income' };
 const [expense, setExpense] = useState(initialState);

 const handleChange = (e)=>{
   console.log(e.target.value,' ', e.target.name);
  setExpense({...expense,[e.target.name]:e.target.value});
 }
 const handleSubmit=(e)=>{
  //  e.preventDefault();
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
  <div className="expFormContainer">
   <form className="expensesForm" onSubmit={handleSubmit}>
    <span className="radioBtns" onChange={handleChange}>
      <RadioButton divCN="input-radio" inputType="radio" inputID="expensepay" name="expenseType" value={expense.expense}  labelID="expenseLabel" htmlFor="expensepay" labelText="Add Expense" />
      <RadioButton divCN="input-radio" inputType="radio" inputID="income" name="expenseType" value={expense.income}  labelID="incomeLabel" htmlFor="income" labelText="Add Income" />
    </span>
    <span className="testInputFields">
      <TextInput divCN="form-group" labelText="Date: " name="date"  type="date" value={expense.date} onChange={handleChange}  inputCN="form-control" required="required"/>
      <TextInput divCN="form-group" labelText="Name: " name="name"  type="text" value={expense.name} onChange={handleChange}  inputCN="form-control" required="required"/>
      <TextInput divCN="form-group" labelText="Amount: " name="amount"  type="text" value={expense.amount} onChange={handleChange}  inputCN="form-control" required="required"/>
      <TextInput divCN="form-group" labelText="Description: " name="description"  type="text" value={expense.description} onChange={handleChange}  inputCN="form-control"/>
      <TextInput divCN="form-group categoryText" id="categoryText" labelText="Category : " name="repeats"  type="text" value={expense.repeats} onChange={handleChange}  inputCN="form-control"/>
    </span>    
   <span id="categoriesDataRadioBtns" onChange={handleChange}>
    {data.categoriesData.map((cateItem, index)=>{
      return(        
        <RadioButton2 key={index} divCN="form-check form-check-inline" inputType="radio" onChange={handleChange} inputID={cateItem.id} name="repeats"  value={cateItem.id}  labelID="" htmlFor={`inlineRadio${cateItem.id}`} labelText={cateItem.title} /> 
      )
    })}
   </span>
    <span>
      <div className="btn-group" id="ExpenseFormSubmitBtn">
      <input type="submit" value="Add expense" className="btn btn-primary" />
      </div>
    </span>
   </form>
   <hr/>
   {/* <CategoryForm/> */}
  </div>
 );
}

export default ExpenseForm;