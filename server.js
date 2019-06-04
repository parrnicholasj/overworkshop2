const express = require("express");
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');

var app = express();

// set up a cookie age and a key you wanna encrypt it with
app.use(cookieSession({
  maxAge: 1 * 60 * 60 * 1000,
  keys: ['iGotTheKeys']
}))

// initalize passport
app.use(passport.initialize());
app.use(passport.session());


const routes = require("./routes");

var PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

app.use(routes);




// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
