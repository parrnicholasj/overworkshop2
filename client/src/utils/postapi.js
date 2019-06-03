import axios from 'axios';



export const getPosts = () => {
  return axios.get('/posts/getPosts');
  
};

export const getPost = (id) => {
  return axios.get('/posts/getPost/id');
  
};




export default {
  getPosts,
  getPost
};
