const jwt = require("jsonwebtoken");
const { User } = require("../models");
const handle = require("../utils/promise-handler");

// hide this in the .env later
const secret = "myLittlePony";

const register = (req, res) => {
  console.log(req.body);

  const {
    userName,
    email,
    password
  } = req.body;

  User.create({
    userName,
    email,
    password

  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log('you didnt sign up/register dude');
    console.log(err);
    res.json(err);
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const [findUserErr, userInfo] = await handle(User.findOne({ email }));

  if (findUserErr) {
    console.log(findUserErr);
    res.status(500).json({
      error: "Internal error, try again"
    });
  } else if (!userInfo) {
    res.status(401).json({
      error: 'Incorrect email'
    });
  } else {
    const [pwdErr, same] = await handle(userInfo.validPassword(password));

    if (pwdErr) {
      res.status.json({
        error: "Inter error, please try again"
      });
    } else if (!same) {
      res.status(401).json({
        error: "Incorrect Password"
      });
    } else {
      const payload = {
        id: userInfo.id,
        email: userInfo.email
      };

      const token = jwt.sign(payload, secret, {
        expiresIn: '5m'
      });

      res.status(200).json(token);
      
    }
  }
};


const getUserProfile = async (req, res) => {
  const [userErr, userProfile] = await handle(User.findOne({ id: req.id }));

  if (userErr) {
    console.log('problem getting usersprofile')
    res.status(500).json(userErr);
  } else {
    res.status(200).json(userProfile);
  }
}

module.exports = {
  register,
  login,
  getUserProfile
};