import React from 'react';
import Home from './pages/home';
import Post from './pages/viewPost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MakePost from './pages/makePost';
import UserContext from './utils/UserContext';
import { loginCheck } from './utils/userApi';
import './App.css';

class App extends React.Component {

  state = {
    isLoggedIn: false,
    userPosts: [],
    id: "",
    userName: "",
    email: "",
    setLogin: (userData) => {
      this.setState({
        id: userData.id,
        userName: userData.userName,
        email: userData.email,
        isLoggedIn: true,
        userPosts: userData.userPosts
      });
    },
    setLogout: () => {
      this.setState({
        isLoggedIn: false,
      });
    },
    checkLogin: () => {
      loginCheck()
        .then(({ data: userInfo }) => {
          console.log(userInfo);
          this.setState({
            isLoggedIn: userInfo.isLoggedIn,
            userName: userInfo.userName,
            email: userInfo.email,
            id: userInfo.id
          })
        })
        .catch(err => console.log(err));
    }
  };

  
  render () {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/viewPost/:postId" component={Post} />
            <Route extact path="/add" component={MakePost} />
            
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
