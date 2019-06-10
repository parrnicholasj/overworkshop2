import React from 'react';
import { Button } from 'react-bootstrap';
import { loginUser } from '../utils/userApi'
import { Link } from 'react-router-dom';


const path = process.env.NODE_ENV === "production" ? "YOUR HEROKU LINK/auth/google" : "http://localhost:3001/auth/google"
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
            className="nav-link" href={path}>
            <button type="button" className="btn btn-gplus btn-danger"><i className="fab fa-google-plus-g pr-1">Google+</i></button>
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
