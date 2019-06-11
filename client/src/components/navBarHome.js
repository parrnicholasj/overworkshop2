import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Login from '../pages/login';

class NavBarhome extends Component
{

  render()
  {
    return (
      <React.Fragment>
        
        <div className="row justify-content-center navbarhome bg-light">
          
        <a href="/">
          <h1 className="display-4 text-dark py-3 m-3 pl-4 justify-content-center">Overworkshop <Login /></h1>
          
          </a>
        </div>
        
       


        

      </React.Fragment>
    );
  }
}

export default NavBarhome;