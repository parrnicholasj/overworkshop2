import axios from "axios";

export const getPosts = () => {
  return axios.get('/posts/getPosts');
  
};

export const getPostsPopular = () => {
  return axios.get('/posts/getPostsPopular');
  
};

export const getPost = (id) => {
  return axios.get(`/posts/getPost/${id}`);
  
};

export const upvotePost = (id) => {
  console.log("upvoting" + id);
  return axios.put(`/posts/upvotepost/${id}`)
}

export const downvotePost = (id) => {
  return axios.put(`/posts/downvotepost/${id}`)
}


export const addPost = (post) => {
  console.log("yes hitting")
  return axios.post('/posts/add', post ).then(res => {
    console.log(res);
    console.log(res.data);
  });
};

export default {
  getPosts,
  getPost,
  addPost

};
