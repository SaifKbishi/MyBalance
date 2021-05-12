import React, {useEffect, useState} from 'react';
import axios from 'axios' ;
import './ExpensesTable.css';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';

const ExpensesTable2 =(props)=>{

 const [expense, setExpense] = useState([]);

 useEffect(()=>{
  const fetchData = async() =>{
   try{
    // const data = await axios.get('/exp/allExpenses/');
    const data = await axios.get('/exp/allExpenses/');
    // console.log('16: ',data.data)
    setExpense(data.data);
   }catch(error){
    console.log('could not fetch data', error);
   }
  }
  fetchData();
 },[expense]);
 
 const handleDelete = async (id)=>{
  const expToDelete = id;
  console.log('expToDelete:',expToDelete)
  try {
   await axios.delete(`/exp/deleteExpense/${expToDelete}`);
  } catch (error) {
   console.log('error with the delete: ', error)
  }
 }//handleDelete

 const handleEdit = async (id)=>{
  const expToEdit = id;
   const getItemToEdit = async ()=>{
    try{
     const response = await axios.get(`/exp/getExpenseByID/${expToEdit}`);
     console.log('43 ExpensesTable response data:',response.data);
    }catch(error){console.log('could not fetch item', error)}
   }
   getItemToEdit();
 }//handleEdit

const [monthExp, setMonthExp] = useState([]);
// const fetchMonthData = async (month)=>{
//   try{
//     const monthData = await axios.get(`/exp/viewbymonth/${month}`);
//     console.log('50',monthData.data)
//     // setMonthExp(monthData.data);
//   }catch(error){console.log('could not fetch data for month', error)}
// }   
//  console.log('month: ',fetchMonthData(6))

//  const renderMonth = (month)=>{
//  }

 return(
  <div>
      
   <div className="expensesTable">{expense.map((expItem)=>{    
    return(
     <React.Fragment key={expItem._id}>
      <small onClick={()=>handleEdit(expItem._id)} className={`expensesItems + ${expItem.expenseType} ? 'income' : 'expense'`} key={expItem._id}>
      <span className="deleteExpItem" onClick={()=>handleDelete(expItem._id)}>X</span>
        <Link to={`/updateExpense/${expItem._id}`}> 
          <span className="expName"> {expItem.name}</span> 
          <span className="expAmount">{expItem.amount}</span>
        </Link>
      </small>      
     </React.Fragment>
    );
   })}</div>
  </div>
 );
}//ExpensesTable

export default ExpensesTable2;
