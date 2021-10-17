import {Navbar, Nav} from 'react-bootstrap'
import React, {useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import './Navigation.css';

function Navigation(){
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(()=>{
    const user = AuthService.getCurrentUser();
    if(user){
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));//ROLE_ADMIN //role_admin
    }
  },[]);

  const logOut=()=>{
    AuthService.logout();
  };  
 return(  
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">My Balance</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      {/* <Nav.Link href="/addExpense" to="/addExpense">New Expense</Nav.Link>
      {  (<Nav.Link href="/viewbymonth">Month View</Nav.Link>)}
      {  (<Nav.Link href="/allExpenses">Year View</Nav.Link>)}
      {  (<Nav.Link href="/charts">Charts</Nav.Link>)} */}
      
      {currentUser && (<Nav.Link href="/addExpense" to="/addExpense">New Expense</Nav.Link>)}
      {currentUser && (<Nav.Link href="/viewbymonth">Month View</Nav.Link>)}
      {currentUser && (<Nav.Link href="/allExpenses">Year View</Nav.Link>)}
      {currentUser && (<Nav.Link href="/charts">Charts</Nav.Link>)}  
      
    </Nav>
    <Nav>
    <div className='navbar-nav mr-auto'>
      {showAdminBoard && (<Nav.Link href="/admin">Admin Board</Nav.Link>)}
      {currentUser && (<Nav.Link href="/user">User</Nav.Link>)}
      </div>

      {currentUser ? (
      <div className='navbar-nav ml-auto'>
      <Nav.Link href="/profile">{currentUser.username}</Nav.Link>
      <Nav.Link href="/login" onClick={logOut}>LogOut</Nav.Link>
      </div>
      ):(
        <div className='log_in_out nabvar-nav ml-auto'>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Sign up</Nav.Link>
      </div>
      )}
    </Nav>
  </Navbar.Collapse>
  </Navbar>
 );
}

export default Navigation;