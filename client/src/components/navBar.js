import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Login from '../pages/login';

class NavBar extends Component
{
  state = {
    loggedIn: false
  }

  reverseLogIn = () => {
    this.setState({loggedIn: !this.state.loggedIn})
  }

  render()
  {
    return (
      <React.Fragment>
        
        
        
          <h1 className="display-4 text-light bg-transparent py-3 m-3
           pl-4">Overworkshops
           {!this.state.loggedIn && (
            
            <Login reverse={this.reverseLogIn} loggedIn={this.state.loggedIn} />
           )}
           
            </h1>
         
       
       


        

      </React.Fragment>
    );
  }
}

export default NavBar;