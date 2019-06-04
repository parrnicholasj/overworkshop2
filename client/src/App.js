import React from 'react';
import Home from './pages/home';
<<<<<<< HEAD
import Post from './pages/viewPost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
=======
import Post from './pages/addPost';
>>>>>>> 7201b31b5a48a95e148a2bacb10670fac641e924
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/viewPost" component={Post} />
          
        </Switch>
      </React.Fragment>
    </Router>
=======
    <div>
    <Home />
    <Post />
    </div>
>>>>>>> 7201b31b5a48a95e148a2bacb10670fac641e924
  );
}

export default App;
