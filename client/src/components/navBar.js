import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Login from '../pages/login';

class NavBar extends Component
{

  render()
  {
    return (
      <React.Fragment>
        
        <div className="row justify-content-center">
        <a href="/">
          <h1 className="navbar display-4 text-light bg-dark py-3 m-3 pl-4">Overworkshop <Login /></h1>
          
          </a>
          </div>
       


        

      </React.Fragment>
    );
  }
}

export default NavBar;