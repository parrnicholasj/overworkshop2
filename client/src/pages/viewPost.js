import React, { Component } from 'react';
import { getPost } from '../utils/postapi';
import MakeComment from '../components/makecomment';
import MakePost from './makePost';
import NavBar from '../components/navBar';
import { upvotePost, downvotePost } from '../utils/postapi';
import ViewComments from '../components/viewcomments';

var post;

class Post extends Component {
  state = {
    postInfo: {},
    id: '',
    comments: '',
    
  };

  componentDidMount() {
    console.log(this.props);
    // read post id from url bar
    const postId = this.props.match.params.postId;
    this.handleViewPosts(postId);
  }

  handleViewPosts = (postId) => {
    console.log(postId + "  post id view post ln:26");
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
          <div className="card-body bg-dark">
            <div className="row justify-content-between p-4">
                {/* <h3><span className="badge badge-success">{post.score}</span></h3> */}
                <nav className="nav flex-column">
                              <a className="nav-link btn text-light btn-outline-info btn-sm" onClick={(e) => {this.clickUpvote(e, post.id)}}>Like</a>
                              <a className="nav-link text-light disabled">{post.score}</a>
                              <a className="nav-link btn text-light btn-outline-light btn-sm" onClick={(e) => {this.clickDownvote(e, post.id)}}>Dislike</a>
                            </nav>
            <h3 className="card-title text-light text-center">
            {post.title}
              </h3>
                <h3><span className="badge badge-info">{post.link}</span></h3> 
                </div>
             
              <div className="row justify-content-between p-4">

              <p className="text-center m-3 text-light">{post.desc}</p>
                
                  <img src={post.screenshot} alt="" />
                  
                

              </div>
            </div>
            </div>
          
          
             
            
          

          
        </div>
      <MakeComment  postId={this.props.match.params.postId || undefined }/>
      <ViewComments postId={this.props.match.params.postId || undefined }/>
      </React.Fragment>
    );
  }
}
export default Post;
