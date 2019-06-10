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
    return (
      <React.Fragment>
        {this.state.commentsList.map(eachComment => {
          return (
            <>
              <div class="card container mt-3 mb-4">
                <div class="card-header">Comments<span className="ml-3">{eachComment.createdAt}</span></div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{eachComment.content}</li>
                </ul>
              </div>
            </>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ViewComments;
