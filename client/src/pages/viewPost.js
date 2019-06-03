import React, { Component } from 'react';
import { getPost } from '../utils/postapi';


class Post extends Component {
  state = {
    postInfo: [],
    id: 1
  };
  
  componentDidMount() {
    this.handleViewPosts(this.state.id);
  }
  
  
  handleViewPosts = (postId) => {
    getPost(postId)
      .then(( data ) => {
        console.log("handleViewPosts");
        console.log(data);

        this.setState({ data });
      })
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state.data)
    return (
      <React.Fragment>
        <h1 className="text-light display-4">Overworkshop</h1>

        <div className="conatiner darkblue p-5">
          


          

        </div>

      </React.Fragment>

    )
  }
}
export default Post;