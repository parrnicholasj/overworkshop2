import React, { Component } from 'react';
import { getPost } from '../utils/postapi';
import MakeComment from "../components/makecomment";
import MakePost from './makePost'
import NavBar from '../components/navBar';


var post;

class Post extends Component {
  state = {
    postInfo: {},
    id: 1,
    comments: ""
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
      .catch(err => console.log(err));
  };

 

 

  render() {
    console.log(this.state.postInfo)
    post = this.state.postInfo
    return (
      <React.Fragment>
        
        <NavBar />

        <div className="conatiner darkblue p-5">
          
         
        
         
          <h1>{post.title}</h1>
          <h2>{post.link}</h2>
          <h3>{post.desc}</h3>
          <h4>{post.score}</h4>
          <div className="img-responsive float-left">
          
            <a>{post.screenshot}</a>
            </div>
            
       
         
          

        
        

          

        </div>
        <MakeComment />
       
        

      </React.Fragment>

    );
  }
}
export default Post;