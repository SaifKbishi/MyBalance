import React, { useState} from "react";
import axios from 'axios'; 
import './ExpenseForm.css';

const ExpensesCategories=()=>{
 // const initialState = {name:'', amount:'', description:'', repeats:'', date:'', expenseType:''}//, expense:'expense', income:'income' };
 // const [expense, setExpense] = useState(initialState);

 
 return(
  <div>
   <select placeholder="YYYY" id="year" onChange={handleChange} >
    <option name="" value=" " >YYYY</option>
    <option name="year" value="2021">2021</option>
    <option name="year" value="2022">2022</option>
    <option name="year" value="2023">2023</option>
    <option name="year" value="2024">2024</option>
   </select>
  </div>
 );
}

export default ExpensesCategories;