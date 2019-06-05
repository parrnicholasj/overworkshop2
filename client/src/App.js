import React from 'react';
import Home from './pages/home';
import Post from './pages/viewPost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MakePost from './pages/makePost';
import './App.css';

function App() {
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

export default App;
