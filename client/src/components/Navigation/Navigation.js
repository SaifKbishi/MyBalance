import {Navbar, Nav, NavDropdown} from 'react-bootstrap'


import React, {useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
  // <>  
  //  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
  //  <NavLink to={'/'} className='navbar-brand' variant="light" bg="dark">My Balance</NavLink>
  //     <div className="navbar-nav">
  //       <ul className="navbar-nav mr-auto">
  //         <li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
  //         {currentUser && (<li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/addExpense">New Expense</NavLink></li>)}
  //         {currentUser && (<li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/viewbymonth">Month View</NavLink></li>)}
  //         {currentUser && (<li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/allExpenses">Year View</NavLink></li>)}
  //         <li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/allExpenses">Charts</NavLink></li>
  //       </ul>
  //     </div>
  //     <div className='navbar-nav ml-auto'>
  //       <div className='navbar-nav mr-auto'>
  //         {showAdminBoard && (<li className='nav-item'><NavLink to={'/admin'} className='nav-link'>Admin Board</NavLink></li>)}
  //         {currentUser && (<li className='nav-item'><NavLink to={'/user'} className='nav-link'>User</NavLink></li>)}
  //       </div>

  //       {currentUser ? (
  //         <div className='navbar-nav ml-auto'>
  //           <li className='nav-item'><NavLink to={'/profile'} className='nav-link'>{currentUser.username}</NavLink></li>
  //           <li className='nav-item'><a href='/login' className='nav-link' onClick={logOut}>LogOut</a></li>
  //         </div>
  //       ):(
  //         <div className='log_in_out nabvar-nav ml-auto'>
  //           <li className='nav-item'><NavLink to={'/login'} className='nam-link'>Login</NavLink></li>
  //           <li className='nav-item'><NavLink to={'/register'} className='nam-link'>Sign up</NavLink></li>            
  //         </div>
  //       )}
  //     </div>
  //   </nav>
  // </>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">My Balance</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      {currentUser && (<Nav.Link href="/addExpense" to="/addExpense">New Expense</Nav.Link>)}
      {currentUser && (<Nav.Link href="/viewbymonth">Month View</Nav.Link>)}
      {currentUser && (<Nav.Link href="/allExpenses">Year View</Nav.Link>)}
      {currentUser && (<Nav.Link href="/allExpenses">Charts</Nav.Link>)}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
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