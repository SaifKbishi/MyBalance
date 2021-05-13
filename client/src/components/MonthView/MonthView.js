import React, {useEffect, useState} from 'react';
import axios from 'axios' ;
import './MonthView.css';
import * as ReactBootStrap from 'react-bootstrap';
import { Link,useHistory  } from 'react-router-dom';

const MonthView =(props)=>{
 const [expense, setExpense] = useState([]);
 const date = new Date();
 const [month, setMonth] = useState(date.getMonth()+1);
 const history = useHistory();

 console.log('props 13:', props) 

 useEffect(()=>{
  const fetchMonthData = async(month) =>{   
   try{
    const data = await axios.get(`/exp/viewbymonth/${month}`);
    setExpense(data.data);
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
  } catch (error) {
   console.log('error with the delete: ', error)
  }
 }//handleDelete

 const renderAnExpense = (exp, index)=>{
  return(
   <tr key={exp._id} className={`expensesItem + ${exp.expenseType} ? 'income' : 'expense'`} 
    onClick={(e)=>(history.push(`/updateExpense/${ expense[index]._id}`))} >
    {/* <td className="deleteIcon"><span className="deleteExpItem" data-delete_tooltip='Delete Expense' onClick={()=>handleDelete(exp._id)}>X</span></td> */}
    <td>{exp.name}</td>
    <td>{exp.amount}</td>
    {/* <td>{exp.expenseType}</td> */}
    <td>{exp.description}</td>
   </tr>
  );
 }//renderAnExpense

 const options= {onRowClick:function(row){console.log(row)}}

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
         {/* <th></th> */}
         <th>Expense Name</th>
         <th>Amount in $</th>
         {/* <th>Expense Type</th> */}
         <th>Description</th>
        </tr>
      </thead>
      <tbody>
       {expense.map(renderAnExpense)}
      </tbody>
     </ReactBootStrap.Table>     
  </div>
 );
}//ExpensesTable

export default MonthView;
