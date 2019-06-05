import React, { Component } from 'react';
import { getPosts } from '../utils/postapi';
import { Redirect } from 'react-router-dom';
import MakePost from '../components/makePost';
import Login from './login';

class Home extends Component
{
  state = {
    postsList: [],
    redirect: false,
    redirectID: ""
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

  setRedirect = (id) => {
    this.setState({
      redirect: true,
      redirectID: id
    })
  }
  renderRedirect = (id) => {
    console.log("redirecting");
    if (this.state.redirect) {
      return <Redirect to={`/viewPost/${id}`} />
    }
  }

  handleSubmit(event, id)
  {//when clicked sends user to that posts page
    event.preventDefault();
    console.log("post id is " + id);

    this.props.history.push("/")//allows user to go back to the homepage
    
    this.setRedirect(id);

  }

  render()
  {
    console.log(this.state.postsList)
    return (
      <React.Fragment>

{/* this must be in here to function */}
      {this.renderRedirect(this.state.redirectID)}

        <h1>overworkshop</h1>

        <Login />

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

                    <div id={post.id} className="card col-12 col-md-6 lightblue">
                      <div className="row">

                        <div className="col-2 col-md-2 gold">
                          <div>upvote</div>
                          <p>{post.score}</p>
                          <div>downvote</div>
                        </div>
                        <div className="col-10 col-md-10 card-body">
                          <h5 className="card-title">{post.title}</h5>
                          <p className="card-text">{shortDesc}</p>
                          <a href="#" className="card-link">{post.link}</a>

                          <form onSubmit={(e) => {this.handleSubmit(e, post.id)}}>
                          <input id="submit" type="submit" value="view" className="btn btn-success btn-lg" />
                          </form>

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