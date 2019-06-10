import axios from 'axios';

export const getUserProfile = () => {
  return axios.get('/api/user')
};

export const loginCheck = () => {
  return axios.get('/auth/status');
}




export default {
  loginCheck
};