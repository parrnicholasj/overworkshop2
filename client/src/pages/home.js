import React, { Component } from 'react';
import { getPosts } from '../utils/postapi';

class Home extends Component
{
  state = {
    postsList: []
  };

  componentDidMount()
  {
    this.handleGetPosts();
  }

  handleGetPosts = () =>
  {
    getPosts()
      .then(({ data: postsList }) =>
      {
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

        <div className="container darkblue p-5">

          <div className="row">
            {
              this.state.postsList.map(post =>
              {
                var shortDesc = post.desc;
                if (shortDesc.length > 255)
                {
                  shortDesc = shortDesc.slice(0, 255).concat(" ... click for more");//so shit does not get to long

                }
                return (
                  <>
                    <div className="col-1 col-md-1 gold">
                      <p>{post.score}</p>
                    </div>
                    <div className="col-10 col-md-5 lightblue">

                      <h2>{post.title}</h2>

                      <p>{post.link}</p>
                      <p>{shortDesc}</p>

                    </div>
                  </>


                )
              })
            }
          </div>

        </div>

      </React.Fragment>
    )
  }

}

export default Home;