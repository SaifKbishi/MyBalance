import React, {useEffect, useState} from 'react';
import axios from 'axios' ;
import './MonthViewInYear.css';
import {Table} from 'react-bootstrap';
import { useHistory  } from 'react-router-dom';

const MonthViewInYear =(props)=>{
 const [expense, setExpense] = useState([]);
 const date = new Date();
 const [month, setMonth] = useState(date.getMonth()+1);

 const fetchMonthData = async(month) =>{
  try{
   const data = await axios.get(`/exp/viewbymonth/${month}`);
   const dataArray = data.data;
   dataArray.sort((a,b)=>(a.repeats > b.repeats)?1:-1);
   setExpense(dataArray);
  }catch(error){
   console.log('MonthView, could not fetch data', error);
  }
 }

 useEffect(()=>{
  fetchMonthData(props.month);
 },[month]);

 const history = useHistory();

 const renderAnExpense = (exp, index)=>{
  return(
   <tr key={exp._id} 
   // className={`expensesItem + ${exp.expenseType} ? 'income' : 'expense'`} 
   className={`expensesItem + ${exp.repeats === 1 ? 'yellow' : exp.repeats === 2 ? 'green' : exp.repeats === 3 ? 'red' : exp.repeats === 4 ? 'white' : exp.repeats === 5 ? 'darkred': exp.repeats === 6 ? 'mediumblue': exp.repeats === 7 ? 'darkgray': exp.repeats === 8 ? 'yellowgreen': exp.repeats === 9 ? 'whitesmoke': exp.repeats === 10 ? 'indigo': exp.repeats === 11 ? 'gold': exp.repeats === 12 ? 'olive': exp.repeats === 13 ? 'slateblue': 'slateblue' }`} 
    onClick={(e)=>( history.push(`/updateExpense/${ expense[index]._id}`))} > 
    <td>{exp.name}</td>
    <td>{exp.repeats ===1?'-':''}{exp.amount}</td>
   </tr>
  );
 }//renderAnExpense

 const options= {onRowClick:function(row){console.log(row)}}

 return(
  <div>
   <Table bordered hover size="sm" options={options}>      
    <tbody >
     {expense.map(renderAnExpense)}
    </tbody>  
   </Table>
  </div>  
 );
}//ExpensesTable

export default MonthViewInYear;
