import React from "react";
import AuthService from "../../services/auth.service";
import './Profile.css'

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container profile">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> profile
        </h3>
      </header>
      <div className="userDetails">
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles && currentUser.roles.map((role, index) => <li className="authorities" key={index}>{role}</li>)}
        </ul>
      </div>
      
    </div>
  );
};

export default Profile;