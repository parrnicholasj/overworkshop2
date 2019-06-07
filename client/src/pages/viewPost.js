import React, { Component } from 'react';
import { getPost } from '../utils/postapi';
import MakeComment from '../components/makecomment';
import MakePost from './makePost';
import NavBar from '../components/navBar';

var post;

class Post extends Component {
  state = {
    postInfo: {},
    id: 1,
    comments: '',
    
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
      .then(({ data }) => {
        console.log(data);

        this.setState({ postInfo: data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state.postInfo);
    post = this.state.postInfo;
    return (
      <React.Fragment>
        <NavBar />

        <div className="conatiner darkblue m-5 p-3">

          <div className="row justify-content-between p-4">
            <h1 className="text-info">{post.score}</h1>

            <h3><span className="badge badge-info">{post.link}</span></h3> 
            
          </div>
            <div className="card w-75 mx-auto">
          <div className="card-body">
            <h3 className="card-title text-center">
            {post.title}
              </h3>
              <hr />
              <p className="text-center">{post.desc}</p>
              <input  type="image" src={post.screenshot} alt="" />

              <img src={post.screenshot}/>
            </div>
            </div>
          
          
             
            
          

          
        </div>
        <MakeComment />
      </React.Fragment>
    );
  }
}
export default Post;
