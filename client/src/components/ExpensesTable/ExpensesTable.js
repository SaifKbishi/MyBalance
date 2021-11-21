import React, {useEffect, useState} from 'react';
import MonthViewInYear from '../MonthViewInYear/MonthViewInYear';
import axios from 'axios' ;
import './ExpensesTable.css';
import {Table, Spinner} from 'react-bootstrap';
import { useHistory  } from 'react-router-dom';


const ExpensesTable =()=>{
 const [expense, setExpense] = useState([]);
 const [loading, setLoading] = useState(false);
 const history = useHistory();

 const abortController = new AbortController();
 const signal = abortController.signal;
 const fetchData = async() =>{
   try{
     const data = await axios.get('/exp/allExpenses/', {signal:signal});
     setExpense(data.data);
     setLoading(true);
   }catch(error){
     console.log('could not fetch data', error);
   }
 }

 useEffect(()=>{  
  fetchData();
  return function cleanup(){
    abortController.abort();
  }
 },[]);
 
 const selectMonth = async (e)=>{
   console.log('month value: ', e.target.cellIndex+1)
   const selectedMonth=e.target.cellIndex+1;
   history.push(`/viewbymonth/${selectedMonth}`)
 }
 const myMonthViewInYear =()=>{
   let yearMonthes = [];
   for(let i=1; i<=12; i++){
     yearMonthes.push(<td key={i}><MonthViewInYear month={i}/></td>);
   }
   return yearMonthes;
 }

 return(
  <div className="yearView">
    {loading ? (    
     <Table bordered hover size="sm" variant="light">
    <thead className="thead-dark"> 
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
      <tr>
      {myMonthViewInYear()}      
      </tr>
    </tbody>    
   </Table>)
    : <Spinner animation="border" />}
  <hr/>  
  </div>
 );
}//ExpensesTable

export default ExpensesTable;
