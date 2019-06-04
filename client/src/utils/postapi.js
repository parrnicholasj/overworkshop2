import axios from "axios";

export const getPosts = () => {
<<<<<<< HEAD
  return axios.get('/posts/getPosts');
  
};

export const getPost = (id) => {
  return axios.get('/posts/getPost/:id?');
  
};




export default {
  getPosts,
  getPost
=======
  return axios.get("/posts/getPosts");
};

export const addPost = (post) => {
  console.log("yes hitting")
  return axios.post(`/posts/add`, post ).then(res => {
    console.log(res);
    console.log(res.data);
  });
};

export default {
  getPosts,
  addPost
>>>>>>> 7201b31b5a48a95e148a2bacb10670fac641e924
};
