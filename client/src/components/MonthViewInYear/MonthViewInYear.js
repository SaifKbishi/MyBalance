import React, {useEffect, useState} from 'react';
import axios from 'axios' ;
import './MonthViewInYear.css';
import * as ReactBootStrap from 'react-bootstrap';
import { useHistory  } from 'react-router-dom';

const MonthViewInYear =(props)=>{
 const [expense, setExpense] = useState([]);
 const date = new Date();
 const [month, setMonth] = useState(date.getMonth()+1);

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
  fetchMonthData(props.month);
 },[month]);

 const handleChange = (e)=>{
  console.log(Number(e.target.value));
  setMonth(e.target.name= Number(e.target.value));
 }//handleChange
 const history = useHistory();

 const renderAnExpense = (exp, index)=>{
  return(
   <tr key={exp._id} className={`expensesItem + ${exp.expenseType} ? 'income' : 'expense'`} 
    onClick={(e)=>(console.log('index',index, '_id', expense[index]._id), history.push(`/updateExpense/${ expense[index]._id}`))} >
    <td>{exp.name}</td>
    <td>{exp.amount}</td>
   </tr>
  );
 }//renderAnExpense

 const options= {onRowClick:function(row){console.log(row)}}

 return(
  <div>
   <ReactBootStrap.Table bordered hover size="sm" options={options}>      
    <tbody>
     {expense.map(renderAnExpense)}
    </tbody>  
   </ReactBootStrap.Table>
  </div>  
 );
}//ExpensesTable

export default MonthViewInYear;
