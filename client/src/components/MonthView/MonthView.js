import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './MonthView.css';

const MonthView =(props)=>{
 const [expense, setExpense] = useState([]);
 const date = new Date();
 const [month, setMonth] = useState(date.getMonth()+1);
 const history = useHistory();

 useEffect(()=>{
  const fetchMonthData = async(month) =>{   
   try{
    const data = await axios.get(`/exp/viewbymonth/${month}`);
    const dataArray = data.data;
    dataArray.sort((a,b)=>(a.expenseType < b.expenseType)?1:-1);
    setExpense(dataArray);
   }catch(error){
    console.log('MonthView, could not fetch data', error);
   }
  }
  fetchMonthData(month);
 },[month]);

 const handleChange = (e)=>{
  console.log(Number(e.target.value));
  setMonth(e.target.name= Number(e.target.value));
 }//handleChange 

 const handleDelete = async (id)=>{
  const expToDelete = id;
  try {
   await axios.delete(`/exp/deleteExpense/${expToDelete}`);
   history.push(`/viewbymonth/`);
  } catch (error) {
   console.log('error with the delete: ', error)
  }
  window.location.reload();
 }//handleDelete

 const renderAnExpense = (exp, index)=>{
  return(
   <tr key={exp._id} className={`expensesItem + ${exp.expenseType} ? 'income' : 'expense'`} >
    <td className="deleteExpItem" data-delete_tooltipmv='Delete Expense' onClick={()=>handleDelete(exp._id)}>X</td>
    <>
    <td onClick={(e)=>(history.push(`/updateExpense/${ expense[index]._id}`))}>{exp.name}</td>
    <td onClick={(e)=>(history.push(`/updateExpense/${ expense[index]._id}`))}>{exp.amount}</td>
    <td onClick={(e)=>(history.push(`/updateExpense/${ expense[index]._id}`))}>{exp.description}</td>
    </>
   </tr>
  );
 }//renderAnExpense

 const options= {onRowClick:function(row){console.log(row)}}

 const getSum = ()=>{
  let monthSum = 0;
  expense.forEach((exp)=>{if(exp.expenseType === 'income') {monthSum+=exp.amount}else{monthSum-=exp.amount}} );
  return monthSum;
 }//getSum

 return(
  <div className="monthView">
   <select onChange={handleChange}>
    <option value="-1">select month</option>
    <option value="1">January</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="4">April</option>
    <option value="5">May</option>
    <option value="6">June</option>
    <option value="7">July</option>
    <option value="8">August</option>
    <option value="9">September</option>
    <option value="10">October</option>
    <option value="11">November</option>
    <option value="12">December</option>
   </select>
   <hr/>
     <ReactBootStrap.Table bordered hover size="sm" options={options}>
      <thead>
        <tr>
         <th>X</th>
         <th>Expense Name</th>
         <th>Amount in $</th>
         <th>Description</th>
        </tr>
      </thead>
      <tbody>
       {expense.map(renderAnExpense)}
       <tr>
         <th></th>
         <th></th>
         <th>{(getSum()>0) ? -getSum() : getSum()  } $</th>
         <th></th>
        </tr>
      </tbody>
     </ReactBootStrap.Table>     
  </div>
 );
}//ExpensesTable

export default MonthView;
