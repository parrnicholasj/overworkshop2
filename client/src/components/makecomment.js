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

    console.log("post id in makecomment   " +   this.props.postId)

<<<<<<< HEAD
//*************************************************** */
    
    

    const comment = this.state.comment;

    console.log(JSON.stringify(comment)  + "  add comment")
=======
    const comment = {
      content: this.state.comment,
      PostId: this.state.postId
    };
    console.log(JSON.stringify(comment) + "  All comment Details");
>>>>>>> f8917fc5157df46feedc6057b544b491036eebe8

    addComment(comment)
      .then(postResponse => {
        console.log(postResponse.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="Comment">Comment</label>
              <textarea
                className="form-control"
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
              className="btn btn-success btn-lg"
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default MakeComment;
