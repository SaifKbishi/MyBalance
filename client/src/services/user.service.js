import axios from 'axios';
import authHeader  from './auth-header';

const API_URL = 'http://localhost:3008/exp/';

class UserService {
 getPublicContent() {
   return axios.get(API_URL + 'all');
 }

 getUserBoard() {
   console.log('user.services')
   return axios.get(API_URL + 'user', { headers: authHeader() });
 }

 getAdminBoard() {
   return axios.get(API_URL + 'admin', { headers: authHeader() });
 }
}

export default new UserService();
