import React, { Component } from 'react';
import { getPost } from '../utils/postapi';

var post;

className Post extends Component {
  state = {
    postInfo: {},
    id: 1,
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
        <h1 className="text-light display-4">Overworkshop</h1>

        <div className="conatiner darkblue p-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
             <h1> {post.title}</h1>
            <h2>{post.link}</h2>
            <h3>{post.desc}</h3>
            <h4>{post.score}</h4>
            <h5>{post.screenshot}
              </p>
              
            </div>
          </div>
         
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default Post;
