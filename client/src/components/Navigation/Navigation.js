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
      setShowAdminBoard(user.role.includes('ROLE_ADMIN'));//ROLE_ADMIN //role_admin
    }
  },[]);

  const logOut=()=>{
    AuthService.logout();
  };  
 return(
  <>  
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
   <NavLink to={'/'} className='navbar-brand' variant="light" bg="dark">My Balance</NavLink>
      <div className="navbar-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
          {currentUser && (<li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/addExpense">New Expense</NavLink></li>)}
          {currentUser && (<li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/viewbymonth">Month View</NavLink></li>)}
          {currentUser && (<li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/allExpenses">Year View</NavLink></li>)}
          <li className="nav-itm"><NavLink exact className="nav-link" activeClassName="active" to="/allExpenses">Charts</NavLink></li>
        </ul>
      </div>
      <div className='navbar-nav ml-auto'>
        <div className='navbar-nav mr-auto'>
          {showAdminBoard && (<li className='nav-item'><NavLink to={'/admin'} className='nav-link'>Admin Board</NavLink></li>)}
          {currentUser && (<li className='nav-item'><NavLink to={'/user'} className='nav-link'>User</NavLink></li>)}
        </div>

        {currentUser ? (
          <div className='navbar-nav ml-auto'>
            <li className='nav-item'><NavLink to={'/profile'} className='nav-link'>{currentUser.username}</NavLink></li>
            <li className='nav-item'><a href='/login' className='nav-link' onClick={logOut}>LogOut</a></li>
          </div>
        ):(
          <div className='log_in_out nabvar-nav ml-auto'>
            <li className='nav-item'><NavLink to={'/login'} className='nam-link'>Login</NavLink></li>
            <li className='nav-item'><NavLink to={'/register'} className='nam-link'>Sign up</NavLink></li>            
          </div>
        )}
      </div>
    </nav>
  </>
 );
}

export default Navigation;