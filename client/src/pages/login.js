import React from 'react';
<<<<<<< HEAD
import { Button } from 'react-bootstrap';
import { loginUser } from '../utils/userApi'
import { Link } from 'react-router-dom';

class Login extends React.Component {

  login() {
    loginUser().catch(err => console.log(err))
  }

  render () {
    return (
      <div className="container">
        <div className="row justify-content-end">
          {/* <Button as="a" href="http://localhost:3001/auth/google" variant="light">
            Login with Google +
          </Button> */}

          <a
            className="nav-link" href="http://localhost:3001/auth/google">
            <button type="button" className="btn btn-gplus btn-danger"><i className="fab fa-google-plus-g pr-1">Google+</i></button>
          </a>
        </div>
=======

function LoginButton() {
  return (
    <div className="container">
      <div className="row justify-content-end">
      <a
           className="nav-link" href="http://localhost:3001/auth/google">
           <button type="button"  className="btn btn-gplus btn-danger"><i className="fab fa-google-plus-g pr-1">Google+ login</i></button>
         </a>
>>>>>>> 6f04f642054acb20ca692d4613eed56dfb737186
      </div>
    );
  }
}

export default Login;
