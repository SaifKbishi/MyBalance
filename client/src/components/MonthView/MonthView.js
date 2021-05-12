import React, {useEffect, useState} from 'react';
import axios from 'axios' ;
import './MonthView.css';
import * as ReactBootStrap from 'react-bootstrap';

const MonthView =()=>{
 const [expense, setExpense] = useState([]);
 const date = new Date();
 const [month, setMonth] = useState(date.getMonth()+1);

 useEffect(()=>{
  const fetchMonthData = async(month) =>{   
   try{
    const data = await axios.get(`/exp/viewbymonth/${month}`);
    setExpense(data.data);
    console.log(data.data)
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

 return(
  console.log('month view', month),
  <div>    
      {/* <p>hello from Month view</p> */}
      <p>{month}</p>
      <select onChange={handleChange}>
       <option value="-1">select month</option>
       <option value="1">January</option>
       <option value="2">February</option>
       <option value="3">March</option>
       <option value="4">April</option>
       <option value="5">May</option>
       <option name="" value="6">June</option>
       <option value="7">July</option>
       <option value="8">August</option>
       <option value="9">September</option>
       <option value="10">October</option>
       <option value="11">November</option>
       <option value="12">December</option>
      </select>
      <hr/>
      {
       expense.map((oneExp=>{
        return(
         
        <React.Fragment>
         {/* <small>{oneExp.name}</small> */}
         <tbody>
           <tr>
            <td>{oneExp.name}</td>
            <td>{oneExp.amount}</td>
            <td>{oneExp.description}</td>
            <td>{oneExp.expenseType}</td>
           </tr>
          </tbody>

        </React.Fragment>
        );
       }))
      }
      
  </div>
 );
}//ExpensesTable

export default MonthView;
