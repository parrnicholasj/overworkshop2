const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const userControl = require('../controllers/user-controller');
const axios = require('axios');
const db = require('../models');

passport.serializeUser((user, done) => {
  done(null, user.googleId);
});

passport.deserializeUser((id, done) => {
  db.User.findOne( { where: { googleId: id } } )
  .then((user) => {
    if (user) {
      done(null, user);
    }
  })
})

passport.use(
  new GoogleStrategy({
    // options to google strategy
    callbackURL: '/auth/google/redirect',
    clientID: '1033130163760-osrrbfunj0sqqufim3phs0euu4o23utj.apps.googleusercontent.com',
    clientSecret: '_dcfeULjupIf1mV3BSORtbMF'
  }, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log('ps callback function fired');
    console.log(profile);
    // console.log('got ya!!!!!');
    const user = {
      userName: profile.displayName,
      email: profile._json.email,
      googleId: profile.id
    };

    db.User.findOne({ where: { googleId: user.googleId } })
    .then(currentUser => {
      if (currentUser) {
        console.log('welcome back ' + currentUser.userName);
        done(null, currentUser);
      } else {
        db.User.create(user);
        done(null, user)
      }
    })
    done(null, user);
  })
)