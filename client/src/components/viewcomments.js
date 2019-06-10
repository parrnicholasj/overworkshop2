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
        <div className="card container text-white bg-dark mt-3 mb-4">
          <div className="card-header">Comments</div>
          <ul className="list-group list-group-flush">
            {this.state.commentsList.map(eachComment => {
              return (
                <>
                  <li className="list-group-item">
                    <div
                      className="card border-dark pb-3"
                    >
                      <div className="card-header text-dark">User: {eachComment.UserId}</div>
                      <div className="card-body text-dark">
                        <h5 className="card-title">{eachComment.content}</h5>
                        <p className="card-text text-muted">
                          {eachComment.createdAt}
                        </p>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewComments;
