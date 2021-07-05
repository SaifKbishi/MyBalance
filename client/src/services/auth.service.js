import axios from 'axios';
const API_URL = 'http://localhost:3008/api/auth/';
// const API_URL = 'http://localhost:3008/exp/auth/';
// const API_URL = '/exp/auth/';

const register = (username, email, password)=>{
 return axios.post(API_URL + 'signup', {username,email,password});
};

const login = (username, password)=>{
 return axios.post(API_URL + 'signin',{username,password,})
 .then((response)=>{
  if(response.data.accessToken){
   localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
 });
};

const logout = ()=>{
 localStorage.removeItem('user');
}

const getCurrentUser = ()=>{
 return JSON.parse(localStorage.getItem('user'));
}

export default{
 register, login, logout, getCurrentUser,
};