import React, { Component } from 'react';
import { getCommentsByPost } from '../utils/commentsAPI';

class ViewComments extends Component {

  state = {
    commentsList: [],
    postId: ""
  };

  componentDidMount() {
    this.setState({
      postId: this.props.postId
    })
  }

  

  componentWillMount(){
    const postId = this.props.postId
    this.handleGetComments(postId)
  }

  handleGetComments = (postId) => {
    console.log(this.props.postId + "   post id in view comments ln:26")
    getCommentsByPost(postId)
    .then(({ data: commentsList }) =>
    {
      this.setState({ commentsList });
      
      console.log(commentsList + "  View Comments ln:30")

    })
    .catch(err => console.log(err))
  }

  render() {

    return(
      <React.Fragment>
      <h3>Hello</h3>
      </React.Fragment>
    )

  }


}

export default ViewComments;