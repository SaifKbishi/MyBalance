import React, {useState, useEffect} from 'react';
// import ExpenseForm from '../ExpenseForm/ExpenseForm';
import ExpenseForm2 from '../ExpenseForm/ExpenseForm2';
import ExpensesTable from '../ExpensesTable/ExpensesTable';
// import ExpensesTable2 from '../ExpensesTable/ExpensesTable2';
import AuthService from "../../services/auth.service";
import { Link } from 'react-router-dom';
import './home.css'
import '../utils/utilsStyle.css'

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
  <p className="intro">
   <h5>Welcome</h5>
   {!currentUser && (<h6>This is the basic view, you need to <b><i><Link style={{textDecoration: 'none', color:'inherit'}} to="/login" >Login</Link></i></b> to enjoy the variety of MyBalance features</h6>)}
  </p>
   {currentUser && (<ExpenseForm2 />)}
   <hr/>
   {/* <div className="neonEffect"></div> */}
   <ExpensesTable />
   {/* <ExpensesTable2 /> */}
  </div>
 );
}//Home

export default Home;