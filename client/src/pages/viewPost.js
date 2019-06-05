import React, { Component } from 'react';
import { getPost } from '../utils/postapi';


class Post extends Component {
  state = {
    postId: [],
    id: 1
  };
  
  componentDidMount() {
    console.log(this.props);
    // read post id from url bar
    const postId = this.props.match.params.postId;
    this.handleViewPosts(postId);
  }
  
  handleViewPosts = (postId) => {
    console.log(postId);
    getPost(postId)
      .then(({ data } ) => {
        console.log("handleViewPosts");
        console.log(data);

        this.setState({ postInfo: data.data });
      })
      .catch(err => console.log(err));
  };



  render() {
     console.log(this.state.postInfo)
    return (
      <React.Fragment>
        <h1 className="text-light display-4">Overworkshop</h1>

        <div className="conatiner darkblue p-5">
          {this.state.postId.map(post =>
          {
            var comment = post.desc;
            
          }
            
          )}
          

        
        

          

        </div>

      </React.Fragment>

    )
  }
}
export default Post;