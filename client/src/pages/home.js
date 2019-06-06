import React, { Component } from 'react';
import { getPosts } from '../utils/postapi';
import { Redirect } from 'react-router-dom';
import MakePost from './makePost';
import Login from './login';

class Home extends Component {
  state = {
    redirect: false,
    redirectID: "",
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

  setRedirect = id => {
    this.setState({
      redirect: true,
      redirectID: id
    });
  };
  renderRedirect = id => {
    console.log("redirecting");
    if (this.state.redirect) {
      return <Redirect to={`/viewPost/${id}`} />;
    }
  };

  handleSubmit(event, id) {
    //when clicked sends user to that posts page
    event.preventDefault();
    console.log("post id is " + id);

    this.props.history.push("/"); //allows user to go back to the homepage

    this.setRedirect(id);
  }

  render() {
    console.log(this.state.postsList);
    return (
      <React.Fragment>

{/* this must be in here to function */}
      {this.renderRedirect(this.state.redirectID)}

        <h1>overworkshop</h1>

        <Login />
      

        <div className="container darkblue p-5">
          <div className="row match-my-cols">
            {this.state.postsList.map(post => {
              var shortDesc = post.desc;
              if (shortDesc.length > 255) {
                shortDesc = shortDesc
                  .slice(0, 255)
                  .concat(" ... click for more"); //so shit does not get to long
              }
              return (
                <>
                  <div className="container mt-5">
                    <div className="card" id={post.id}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-1">
                            <nav className="nav flex-column">
                              <a className="nav-link btn btn-success">Like</a>
                              <a className="nav-link disabled">{post.score}</a>
                              <a className="nav-link btn btn-danger">Dislike</a>
                            </nav>
                          </div>

                          <div className="col-11">
                            <h5 className="card-title">
                              {post.title}
                              <span className="badge badge-info">
                                {post.link}
                              </span>
                            </h5>
                            <hr />
                            <p className="card-text">{shortDesc}</p>
                            <p className="card-text">
                              <small className="text-muted">
                                Last updated 3 mins ago
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                   

                  <form
                    onSubmit={e => {
                      this.handleSubmit(e, post.id);
                    }}
                  >
                    <input
                      id="submit"
                      type="submit"
                      value="View Post"
                      className="btn btn-success btn-lg"
                    />
                  </form>
                  </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <MakePost />
      </React.Fragment>
    );
  }
}

export default Home;
