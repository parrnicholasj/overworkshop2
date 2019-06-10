import axios from "axios";

export const loginUser = () => {
  return axios.get('/auth/google')
};

export const isThereUser = () => {
  return axios.get('/auth/status');
};





// export default {
//   getPosts
// };


export const getStatus = () => {
  console.log("hitting route");
  return axios.get("/users/status");
};