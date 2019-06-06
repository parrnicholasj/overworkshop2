import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

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