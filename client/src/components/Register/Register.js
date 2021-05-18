import React, { useState, useRef } from "react";
import TextInput from '../utils/TextInput';
import AuthService from "../../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
import './Register.css';
// import { isEmail } from "validator";


// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const validEmail = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

const Register = (props) => {
  const form = useRef();
  // const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    console.log('62 username', username)
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    console.log('email: ',email)
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

    // form.current.validateAll();

    // if (checkBtn.current.context._errors.length === 0) {
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
    // }
  };

  return (
    document.title = 'My Balance | Register',
    <div className="reg col-md-12">
      Register
      <div className="card card-container">
        <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>

        {/* <Form onSubmit={handleRegister} ref={form}> */}
        <form onSubmit={handleRegister} ref={form} className="RegisterForm">
          {!successful && (
            <div>
              <TextInput divCN="form-group" labelText="Username" name="username"  type="text" value={username} onChange={onChangeUsername}  inputCN="form-control"/>
              {/* <div className="form-group">
                <label htmlFor="username">Username</label>                
                <input type="text" className="form-control" name="username" value={username} onChange={onChangeUsername}/>
              </div> */}
              {/* <input type="text" className="form-control" name="username" value={username} onChange={onChangeUsername} validations={[required, vusername]}/> */}

              <TextInput divCN="form-group" labelText="Email" name="email"  type="text" value={email} onChange={onChangeEmail}  inputCN="form-control"/>
              {/* <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" name="email" value={email} onChange={onChangeEmail} />
              </div> */}
              {/*<input type="text" className="form-control" name="email" value={email} onChange={onChangeEmail} validations={[required, validEmail]}/>*/}

              <TextInput divCN="form-group" labelText="Password" name="password"  type="password" value={password} onChange={onChangePassword}  inputCN="form-control"/>
              {/* <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" value={password} onChange={onChangePassword}/>
              </div> */}
              {/* <input type="password" className="form-control" name="password" value={password} onChange={onChangePassword} validations={[required, vpassword]}/>*/}

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
          {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
        {/* </Form> */}
        </form>
      </div>
    </div>
  );
};

export default Register;