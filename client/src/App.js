import React from 'react';
import Home from './pages/home';
import Post from './pages/viewPost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import add from './pages/addPost';
import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/viewPost" component={Post} />
          
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
