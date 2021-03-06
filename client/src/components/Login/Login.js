import React, {useState, useRef} from 'react';
import AuthService from '../../services/auth.service';
import TextInput from '../utils/TextInput';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
// import './style.js';

const Login = (props)=>{
 const form = useRef();

 const [username, setUsername] = useState('');
 const [pw, setPw] = useState('');
 const [loading, setLoading] = useState('');
 const [message, setMessage] = useState('');

 const onChangeUsername = (e)=>{
  const username = e.target.value;
  console.log('Login /username: ',username)
  setUsername(username);
 }

 const OnChangePW =(e)=>{
  const pw = e.target.value;
  setPw(pw);
 }

 const handleLogin = (e)=>{
  e.preventDefault();

  setMessage('');
  setLoading(true);

   AuthService.login(username, pw).then(
    ()=>{
     props.history.push('/profile');
    //  history.push('/profile');
     window.location.reload();
    },
    (error)=>{
     const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
     console.log(resMessage)
     setLoading(false);
    }
   );
 };//handleLogin

 return(
  // document.title = 'My Balance | Login',
  <div className="reg col-md-12">
   <div className="card card-container">
    <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card" />
    <form onSubmit={handleLogin} ref={form} className="LoginForm">
    <TextInput divCN="form-group" labelText="Username" name="username"  type="text" value={username} onChange={onChangeUsername}  inputCN="form-control"/>
    <TextInput divCN="form-group" labelText="Password" name="pw"  type="text" value={pw} onChange={OnChangePW}  inputCN="form-control"/> 
     <div className="form-group">
      <button className="btn btn-primary btn-block" disabled={loading}>
       {loading && (<span className="spinner-border spinner-border-sm"></span>)}
       <span>Login</span>
      </button>      
     </div>
     {message && (
      <div className="form-group">
       <div className="alert alert-danger" role="alert">
        {message}
       </div>
      </div>
     )}
    </form>
   </div>
   <h5>Try <b><i>sk1982</i></b> as username and PW.</h5>
  </div>
 );
}

export default Login;