import React, {useState, useEffect} from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import ExpensesTable from '../ExpensesTable/ExpensesTable';
// import ExpensesTable2 from '../ExpensesTable/ExpensesTable2';
import AuthService from "../../services/auth.service";
import {ExpenseContext} from '../ExpenseContext/ExpenceContext';

function Home(){
  const initialState = {name:'', amount:'', description:'', repeats:'', date:'', expenseType:'expense', expense:'expense', income:'income' };
  // const [name, setName] = useState(''); 
  // const [amount, setAmount] = useState(''); 
  // const [description, setDescription] = useState(''); 
  // const [repeats, setRepeats] = useState(''); 
  // const [date, setDate] = useState(''); 
  // const [expenseType, setExpenseType] = useState('expense'); 
  const [expense, setExpense] = useState('expense'); 
  // const [income, setIncome] = useState('income'); 

 const [currentUser, setCurrentUser] = useState(undefined); 
 useEffect(()=>{
   const user = AuthService.getCurrentUser();
   if(user){
     setCurrentUser(user);
   }
 },[]);
 
 return(
  <div className="homepage">
   <h5>Welcome</h5>
   {!currentUser && (<h6>This is the basic view, you need to SignUp/Login to enjoy the variety of MyBalance features</h6>)}

    <ExpenseContext.Provider value={{name, setName, amount, setAmount, description, setDescription, repeats, setRepeats, date, setDate,
      expenseType, setExpenseType, expense, setExpense, income, setIncome}}>
    {currentUser && (<ExpenseForm />)}
    <hr/>
    <ExpensesTable />
    {/* <ExpensesTable2 /> */}
    </ExpenseContext.Provider>
  </div>
 );
}//Home

export default Home;