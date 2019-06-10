import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Login from '../pages/login';

class NavBar extends Component
{

  render()
  {
    return (
      <React.Fragment>
        
        <div className="row justify-content-center navbar bg-dark">
          
        <a href="/">
          <h1 className="display-4 text-light py-3 m-3 pl-4 justify-content-center">Overworkshop <Login /></h1>
          
          </a>
        </div>
        
       


        

      </React.Fragment>
    );
  }
}

export default NavBar;