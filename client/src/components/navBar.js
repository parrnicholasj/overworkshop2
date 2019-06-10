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
        
<<<<<<< HEAD
        
        
          <h1 className="display-4 text-light bg-transparent py-3 m-3
           pl-4">Overworkshops
           {!this.state.loggedIn && (
            
            <Login reverse={this.reverseLogIn} loggedIn={this.state.loggedIn} />
           )}
           
            </h1>
         
       
=======
        <div className="row justify-content-center">
        <a href="/">
          <h1 className="navbar display-4 text-light bg-dark py-3 m-3 pl-4">Overworkshop <Login /></h1>
          
          </a>
          </div>
>>>>>>> 6f04f642054acb20ca692d4613eed56dfb737186
       


        

      </React.Fragment>
    );
  }
}

export default NavBar;