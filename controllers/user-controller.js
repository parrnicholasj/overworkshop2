const db = require("../models");
// const handle = require("../utils/promise-handler");

const register = (req, res) => {
  console.log(req.body);

  const {
    userName,
    email,
    googleId
  } = req.body;

  db.User.create({
    userName,
    email,
    googleId

  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log('you didnt sign up/register dude');
    console.log(err);
    res.json(err);
  });
};

const getUserProfile = async (req, res) => {
  const [userErr, userProfile] = await handle(db.User.findOne({id: req.id}));
  if (userErr) {
    res.status(500).json(userErr)
  } else {
    res.status(200).json(userProfile);
  }
}

module.exports = {
  register,
  getUserProfile
};