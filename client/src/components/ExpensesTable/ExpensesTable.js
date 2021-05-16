import React, {useEffect, useState} from 'react';
import MonthViewInYear from '../MonthViewInYear/MonthViewInYear'
import MonthView from '../MonthView/MonthView'
import axios from 'axios' ;
import './ExpensesTable.css';
import * as ReactBootStrap from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { Link,useHistory  } from 'react-router-dom';

const ExpensesTable =(props)=>{
 const [expense, setExpense] = useState([]);
 const history = useHistory();

 useEffect(()=>{
  const fetchData = async() =>{
   try{
    const data = await axios.get('/exp/allExpenses/');
    setExpense(data.data);
   }catch(error){
    console.log('could not fetch data', error);
   }
  }
  fetchData();
 },[expense]);
 
 const handleDelete = async (id)=>{
  const expToDelete = id;
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
    //  console.log('43 ExpensesTable response data:',response.data);
    }catch(error){console.log('could not fetch item', error)}
   }
   getItemToEdit();
 }//handleEdit
 
 const selectMonth = async (e)=>{
   console.log('month value: ', e.target.cellIndex+1)
   const selectedMonth=e.target.cellIndex+1;
   history.push(`/viewbymonth/${selectedMonth}`)
 }

 return(
  <div className="yearView">
     <ReactBootStrap.Table bordered hover size="sm" variant="dark">
    <thead>
      <tr onClick={selectMonth}>
        <th value="1">January</th>
        <th value="2">February</th>
        <th value="3">March</th>
        <th value="4">April</th>
        <th value="5">May</th>
        <th value="6">June</th>
        <th value="7">July</th>
        <th value="8">August</th>
        <th value="9">September</th>
        <th value="10">October</th>
        <th value="11">November</th>
       <th value="12">December</th>
      </tr>
    </thead>
    <tbody>
      <td><MonthViewInYear month='1'/></td>
      <td><MonthViewInYear month='2'/></td>
      <td><MonthViewInYear month='3'/></td>
      <td><MonthViewInYear month='4'/></td>
      <td><MonthViewInYear month='5'/></td>
      <td><MonthViewInYear month='6'/></td>
      <td><MonthViewInYear month='7'/></td>
      <td><MonthViewInYear month='8'/></td>
      <td><MonthViewInYear month='9'/></td>
      <td><MonthViewInYear month='10'/></td>
      <td><MonthViewInYear month='11'/></td>
      <td><MonthViewInYear month='12'/></td>
    </tbody>
   </ReactBootStrap.Table>
  <hr/>
   <div className="expensesTable">{expense.map((expItem)=>{    
    return(
     <React.Fragment key={expItem._id}>
      <small onClick={()=>handleEdit(expItem._id)} className={`expensesItems + ${expItem.expenseType} ? 'income' : 'expense'`} key={expItem._id}>
      <span className="deleteExpItem" data-delete_tooltip='Delete Expense' onClick={()=>handleDelete(expItem._id)}>X</span>
        <Link to={`/updateExpense/${expItem._id}`} data-tooltip='Edit Expense'> 
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

export default ExpensesTable;
