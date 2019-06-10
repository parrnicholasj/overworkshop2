import axios from 'axios';


export const loginUser = () => {
  return axios.get('/auth/google')
};

export const isThereUser = () => {
  return axios.get('/auth/status');
};





export default {
  isThereUser,
  loginUser
  
};