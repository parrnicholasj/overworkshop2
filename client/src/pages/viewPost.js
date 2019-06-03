import React, { Component } from 'react';
import { getPost } from '../utils/postapi';

var id = 1

class Post extends Component {
  state = {
    postInfo: []
  };

  componentDidMount() {
    this.handleViewPosts();
  }
  
  
  
  handleViewPosts = () => {
    getPost(id)
      .then(({ data }) => {
        console.log("handleViewPosts");
        console.log(data);

        this.setState({ postInfo });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.postInfo)
    return (
      <React.Fragment>
        <h1 className="text-light display-4">Overworkshop</h1>

        <div className="conatiner darkblue p-5">
          {console.log("title " +  this.state.postInfo)}


          

        </div>

      </React.Fragment>

    )
  }
}
export default Post;