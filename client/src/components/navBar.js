import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Login from '../pages/login';

class NavBar extends Component
{

  render()
  {
    return (
      <React.Fragment>
        
        
        <a href="/">
          <h1 className="display-4 text-light bg-transparent py-3 m-3 pl-4">Overworkshop <Login /></h1>
         
        </a>
       


        

      </React.Fragment>
    );
  }
}

export default NavBar;