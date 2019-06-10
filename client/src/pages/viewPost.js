import React, { Component } from 'react';
import { getPost } from '../utils/postapi';
import MakeComment from '../components/makecomment';
import MakePost from './makePost';
import NavBar from '../components/navBar';
import { upvotePost, downvotePost } from '../utils/postapi';

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
    console.log(postId + "  post id");
    getPost(postId)
      .then(({ data }) => {
        console.log(data);

        this.setState({ postInfo: data });
      })
      .catch((err) => console.log(err));
  };

  clickUpvote(event, id)
  {
    event.preventDefault();
    console.log("click" + id);
    upvotePost(id)
      
      .catch(err => console.log(err));
  }

  clickDownvote(event, id)
  {
    event.preventDefault();
    downvotePost(id)
      
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.postInfo);
    post = this.state.postInfo;
    return (
      <React.Fragment>

         
        <NavBar />

        <div className="conatiner bg-trasnparent m-5 p-3">

          {/* <div className="row justify-content-between p-4"> */}
          {/* <h1><span className="badge badge-success">{post.score}</span></h1> */}

            {/* <h3><span className="badge badge-success">{post.link}</span></h3>  */}
            
          {/* </div> */}
            <div className="card viewpost-card w-75 mx-auto">
          <div className="card-body">
            <div className="row justify-content-between p-4">
                {/* <h3><span className="badge badge-success">{post.score}</span></h3> */}
                <nav className="nav flex-column">
                              <a className="nav-link btn btn-outline-success" onClick={(e) => {this.clickUpvote(e, post.id)}}>Like</a>
                              <a className="nav-link disabled">{post.score}</a>
                              <a className="nav-link btn btn-outline-dark" onClick={(e) => {this.clickDownvote(e, post.id)}}>Dislike</a>
                            </nav>
            <h3 className="card-title text-center">
            {post.title}
              </h3>
                <h3><span className="badge badge-success">{post.link}</span></h3> 
                </div>
              <hr />
              <div className="row justify-content-between p-4">

              <p className="text-center m-3">{post.desc}</p>
                
                  <img src={post.screenshot} alt="" />
                  
                

              </div>
            </div>
            </div>
          
          
             
            
          

          
        </div>
      <MakeComment  postId={this.state.id || undefined }/>
      </React.Fragment>
    );
  }
}
export default Post;
