import axios from "axios";

export const getComments = () => {
  return axios.get("/comments/getComments");
};

export const addComment = (comment) => {
  console.log("yes hitting")
  return axios.post('/comments/add', comment ).then(res => {
    console.log(res);
    console.log(res.data);
  });
};

export default {
  getComments,
  addComment
};