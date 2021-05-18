import React, {useState, useEffect} from 'react';
// import './home.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import ExpensesTable from '../ExpensesTable/ExpensesTable';
import AuthService from "../../services/auth.service";

function Home(){
 const [currentUser, setCurrentUser] = useState(undefined);
 useEffect(()=>{
   const user = AuthService.getCurrentUser();
   if(user){
     setCurrentUser(user);
   }
 },[]);
 
 return(
  <div className="homepage">
   <h5>Welcome</h5>
   {!currentUser && (   <h6>This is the basic view, you need to SignUp/Login to enjoy the variety of MyBalance features</h6>)}

   {currentUser && (<ExpenseForm />)}
   <hr/>
   <ExpensesTable />
  </div>
 );
}//Home

export default Home;