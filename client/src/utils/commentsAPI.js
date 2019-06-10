import axios from "axios";

export const getCommentsbypost = (postId) => {
  return axios.get(`/comments/getCommentsbypost/${postId}`)
};

export const addComment = (comment) => {
  console.log("yes hitting")
  return axios.post('/comments/add', comment ).then(res => {
    console.log(res);
    console.log(res.data);
  });
};

export const addImage = (image) => {
  return axios.post('')
}

export default {
  getCommentsbypost,
  addComment
};