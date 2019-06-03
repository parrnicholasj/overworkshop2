import axios from "axios";

export const getPosts = () => {
  return axios.get("/posts/getPosts");
};

export const addPost = (post) => {
  return axios.post(`/posts/add`, { post }).then(res => {
    console.log(res);
    console.log(res.data);
  });
};

export default {
  getPosts,
  addPost
};
