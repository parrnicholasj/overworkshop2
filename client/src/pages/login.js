import React from 'react';
import { loginUser } from '../utils/userApi'


const path = process.env.NODE_ENV === "https://overworkshop.herokuapp.com/auth/google" ? "YOUR HEROKU LINK/auth/google" : "http://localhost:3001/auth/google"
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
            className="nav-link" href="https://overworkshop.herokuapp.com/auth/google">
            <button type="button" className="btn btn-gplus btn-danger"><i className="fab fa-google-plus-g pr-1">Google+</i></button>
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
