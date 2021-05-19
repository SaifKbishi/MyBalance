import React, { useState, useRef } from "react";
import TextInput from '../utils/TextInput';
import AuthService from "../../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import './Register.css';

const Register = (props) => {
  const form = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

      AuthService.register(username, email, password).then(
        (response) => {
          console.log('86 Register: ',response.data.message);
          setMessage(response.data.message);          
          setSuccessful(true);
        },
        (error) => {
          const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
  };

  return (
    document.title = 'My Balance | Register',
    <div className="reg col-md-12">
      Register
      <div className="card card-container">
        <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>

        <form onSubmit={handleRegister} ref={form} className="RegisterForm">
          {!successful && (
            <div>
              <TextInput divCN="form-group" labelText="Username" name="username"  type="text" value={username} onChange={onChangeUsername}  inputCN="form-control"  required="required"/>        
              <TextInput divCN="form-group" labelText="Email" name="email"  type="text" value={email} onChange={onChangeEmail}  inputCN="form-control" required="required"/>
              <TextInput divCN="form-group" labelText="Password" name="password"  type="password" value={password} onChange={onChangePassword}  inputCN="form-control" required="required"/>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert" >
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;