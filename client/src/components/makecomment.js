import React, { Component } from "react";
import { addComment } from "../utils/commentsAPI";

class MakeComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      postId: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      postId: this.props.postId,
    })
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log("A comment was submitted: " + JSON.stringify(this.state));

    console.log("ln:31 post id in makecomment   " +   this.props.postId)

    const comment = {
      content: this.state.comment,
      PostId: this.state.postId
    };
    console.log(JSON.stringify(comment) + "  All comment Details");

    addComment(comment)
      .then(postResponse => {
        console.log(postResponse.data);
      })
      .catch(err => {
        console.log(err);
      });
      window.location.reload();
  }

  render() {
    return (
      <React.Fragment>
        <div className="card container text-white bg-dark makecomment col-6 ">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="card-title mt-3 text-center" htmlFor="Comment">Add Comment Here</div>
              <textarea
                className="form-control mb-2"
                id="comment"
                rows="3"
                value={this.state.comment}
                name="comment"
                onChange={this.handleChange}
              />
            </div>
            <input
              id="submit"
              type="submit"
              value="submit"
              className="btn btn-outline-light mb-3"
              
            />
          </form>

        </div>
      </React.Fragment>
    );
  }
}

export default MakeComment;
