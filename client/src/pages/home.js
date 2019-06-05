import React, { Component } from 'react';
import { getPosts } from '../utils/postapi';
import MakePost from './makePost';

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

          <div className="row match-my-cols">
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

                    <div className="card col-12 col-md-6 lightblue">
                      <div className="row">

                        <div id={post.id} className="col-2 col-md-2 gold">
                          <div>upvote</div>
                          <p>{post.score}</p>
                          <div>downvote</div>
                        </div>
                        <div className="col-10 col-md-10 card-body">
                          <h5 className="card-title">{post.title}</h5>
                          <p className="card-text">{shortDesc}</p>
                          <a href="#" className="card-link">{post.link}</a>
                        </div>

                      </div>
                    </div>

                  </>


                )
              })
            }
          </div>

        </div>

        <MakePost />

      </React.Fragment>

    )
  }

}

export default Home;