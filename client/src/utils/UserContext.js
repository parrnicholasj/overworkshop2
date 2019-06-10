import React from 'react';


const UserContext = React.createContext({
  isLoggedIn: false,
  userPosts: [],
  id: "",
  userName: "",
  email: ""
});

export default UserContext;