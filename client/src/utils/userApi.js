import axios from "axios";


// export const register = () => {
//   return axios.get('/auth/google');
// };





// export default {
//   getPosts
// };


export const getStatus = () => {
  console.log("hitting route");
  return axios.get("/users/status");
};