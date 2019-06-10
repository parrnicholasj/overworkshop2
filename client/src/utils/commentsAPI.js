import axios from "axios";

export const getCommentsbypost = () => {
  return axios.get("/comments/getCommentsbypost");
};

export const addComment = (comment) => {
  console.log("yes hitting")
  return axios.post('/comments/add', comment ).then(res => {
    console.log(res);
    console.log(res.data);
  });
};

export default {
  getCommentsbypost,
  addComment
};