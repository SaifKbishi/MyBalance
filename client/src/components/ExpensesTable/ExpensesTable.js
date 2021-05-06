import React, {useEffect, useState} from 'react';
import axios from 'axios' ;
import './ExpensesTable.css';
import { Link } from 'react-router-dom';


const ExpensesTable =()=>{
 // const initialState = {Name:'', amount:0, Description:'', Repeats:0 };
 // const [expense, setExpense] = useState(initialState);
 const [expense, setExpense] = useState([]);

 useEffect(()=>{
  const fetchData = async() =>{
   try{
    // console.log('fetching month data ');
    const data = await axios.get('/exp/allExpenses/');
    // console.log('data 15',data.data);
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
  console.log('editing', expToEdit);
  /** */
   const getItemToEdit = async ()=>{
    try{
     // const response = await axios.get(`/exp/getExpenseByID/${expToEdit}`);
     // console.log('43 ExpensesTable response data:',response.data)
     // <ExpenseEdit dataFromExpensesTable={response.data}/>
     // setExpense(response.data);
    }catch(error){console.log('could not fetch item', error)}
   }
   getItemToEdit();
  /** */
  // try{
  //  await axios.patch(`/exp/updateExpense/${expToEdit}`);
  // }catch(error){console.log('error updating item', error)}
 }//handleEdit

 return(  
  <div>
   <div className="expensesTable">{expense.map((expItem)=>{
    
    return(
     <React.Fragment key={expItem._id}>
      {/* <small onClick={<ExpenseEdit dataFromExpensesTable={expItem._id}/>} className={`expensesItems + ${expItem.expenseType} ? 'income' : 'expense'`} key={expItem._id}> */}
      <small onClick={()=>handleEdit(expItem._id)} className={`expensesItems + ${expItem.expenseType} ? 'income' : 'expense'`} key={expItem._id}>
      {/* <small className={`expensesItems + ${expItem.expenseType} ? 'income' : 'expense'`} key={expItem._id}> */}
      <span className="deleteExpItem" onClick={()=>handleDelete(expItem._id)}>X</span>
      <Link to={`/exp/updateExpense/${expItem._id}`}> <span className="expName"> {expItem.name}</span> <span className="expAmount">{expItem.amount}</span></Link>
      </small>      
     </React.Fragment>
    );
   })}</div>
  </div>
 );
}//ExpensesTable

export default ExpensesTable;

/**   {
          _id: 0,
          date2: { $month: "$date" }
    } */
