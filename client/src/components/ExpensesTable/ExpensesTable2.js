import React, {useEffect, useState} from 'react';
import MonthViewInYear from '../MonthViewInYear/MonthViewInYear';
import axios from 'axios' ;
import './ExpensesTable.css';
import * as ReactBootStrap from 'react-bootstrap';
import { useHistory,Link  } from 'react-router-dom';

const ExpensesTable2 =(props)=>{
 const [expense, setExpense] = useState([]);
 const history = useHistory();

 useEffect(()=>{
  const abortController = new AbortController();
  const signal = abortController.signal;
  const fetchData = async() =>{
   try{
    const data = await axios.get('/exp/allExpenses/', {signal:signal});
    setExpense(data.data);
   }catch(error){
    console.log('could not fetch data', error);
   }
  }
  fetchData();
  getSumByMonth();
  return function cleanup(){
    abortController.abort();
  }
 },[expense]);
 
 const getSumByMonth = async (month)=>{
  let aMonthSum=0;
  expense.forEach((exp)=>{
   let adate = new Date(exp.date);
   if(Number(adate.getMonth()+1) ===month ){
    if(exp.expenseType === 'income') {
     aMonthSum+=exp.amount;
    }else{
     aMonthSum-=exp.amount;
    }
    return aMonthSum;
   }else return;
 });
 setTimeout(()=>{
 }, 1000);
}//getSumByMonth

 const selectMonth = async (e)=>{
   console.log('month value: ', e.target.cellIndex+1)
   const selectedMonth=e.target.cellIndex+1;
   history.push(`/viewbymonth/${selectedMonth}`)
 }

 return(
  <div className="yearView">
     <ReactBootStrap.Table bordered hover size="sm" variant="dark">
    <thead>
      <tr className="monthDropDown" onClick={selectMonth}>        
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
      <td>{getSumByMonth(12)}</td>
    </tbody>
   </ReactBootStrap.Table>
  <hr/>  
  </div>
 );
}//ExpensesTable

export default ExpensesTable2;
