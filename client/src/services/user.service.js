import axios from 'axios';
import authHeader  from './auth-header';

// const API_URL = 'http://localhost:3008/api/test/';
// const API_URL = 'http://localhost:3008/api/';
const API_URL = 'http://localhost:3008/exp/';

console.log('user.service');

class UserService {
 getPublicContent() {
   return axios.get(API_URL + 'all');
 }

 getUserBoard() {
   return axios.get(API_URL + 'user', { headers: authHeader() });
 }

 // getModeratorBoard() {
 //   return axios.get(API_URL + 'mod', { headers: authHeader() });
 // }

 getAdminBoard() {
   return axios.get(API_URL + 'admin', { headers: authHeader() });
 }
}

export default new UserService();


// const getPublicContent = async ()=>{
//  const data = await axios.get(API_URL+ 'all');
//  return data;
// };

// const getUserBoard =()=>{
//  return axios.get(API_URL+'user', {headers: authHeader()});
// };

// // const getModeratorBoard =()=>{
// //  return axios.get(API_URL+'mod', {headers: authHeader()});
// // };

// const getAdminBoard =()=>{
//  return axios.get(API_URL+'admin', {headers: authHeader()});
// };

// export default {
//  getPublicContent, getUserBoard, getAdminBoard, //getModeratorBoard,
// };