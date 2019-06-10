import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Login from '../pages/login';
import UserContext from '../utils/UserContext';

class NavBar extends Component
{

  render()
  {
    return (
      <React.Fragment>


        <a href="./">
          <h1>Overworkshop</h1>
        </a>

      </React.Fragment>
    );
  }
}

export default NavBar;