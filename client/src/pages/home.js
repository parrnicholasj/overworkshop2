import React, { Component } from 'react';
import { getPosts } from '../utils/postapi';

class Home extends Component
{
  state = {
    postsList: []
  };

  componentDidMount() {
    this.handleGetPosts();
  }

  handleGetPosts = () => {
    getPosts()
      .then(({ data: postsList }) => {
        this.setState({ postsList });
      })
      .catch(err => console.log(err));
  };

  render()
  {
    console.log(this.state.postsList)
    return (
      <React.Fragment>

        <h1>overworkshop</h1>
        
        {
          this.state.postsList.map(post => {
                return (
                  
                  <div>
                  <h2>{post.title}</h2>

                  <p>{post.link}</p>
                  <p>{post.desc}</p>
                      
                    </div>
                  
                )
          })
        }

      </React.Fragment>
    )
  }

}

export default Home;