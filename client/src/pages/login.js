import React from 'react';

function LoginButton() {
  return (
    <div className="container">
      <div className="row justify-content-end">
      <a
           className="nav-link" href="http://localhost:3001/auth/google">
           <button type="button"  className="btn btn-gplus btn-danger"><i className="fab fa-google-plus-g pr-1">Google+ login</i></button>
         </a>
      </div>
    </div>
  );
}

export default LoginButton;
