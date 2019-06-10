import React, { Component } from "react";
import { getCommentsByPost } from "../utils/commentsAPI";

class ViewComments extends Component {
  state = {
    commentsList: [],
    postId: ""
  };

  componentDidMount() {
    this.setState({
      postId: this.props.postId
    });
  }

  componentWillMount() {
    const postId = this.props.postId;
    this.handleGetComments(postId);
  }

  handleGetComments = postId => {
    console.log(this.props.postId + "   post id in view comments ln:26");
    getCommentsByPost(postId)
      .then(({ data }) => {
        console.log(data);
        this.setState({ commentsList: data });
      })
      .catch(err => console.log(err));
  };

  render() {
  //   return (
  //     <React.Fragment>
  //       {this.state.commentsList.map(eachComment => {
  //         return (
  //           <>
  //             <h3>Hello</h3>
  //             <h2>{eachComment.content}</h2>
  //           </>
  //         );
  //       })}
  //     </React.Fragment>
  //   );
  // }
  return(

    <div>
    <h3>Hello</h3>
    {console.log(this.state.commentsList,  "View Comments ln:49")}
    </div>
  )
  }
};

export default ViewComments;
