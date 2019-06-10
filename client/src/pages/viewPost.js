import React, { Component } from 'react';
import { getPost } from '../utils/postapi';
import MakeComment from '../components/makecomment';
import MakePost from './makePost';
import NavBar from '../components/navBar';
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
            <h3><span className="badge badge-success">{post.score}</span></h3>
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
      <MakeComment  postId={this.props.match.params.postId || undefined }/>
      <ViewComments postId={this.props.match.params.postId || undefined }/>
      </React.Fragment>
    );
  }
}
export default Post;
