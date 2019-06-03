var express = require("express");

var app = express();

app.set('view engine', 'ejs')

const postRoutes = require("./routes/api/apiPostRoutes")

const userRoutes = require("./routes/api/user-routes");

var PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes

app.use(postRoutes);//see routes/index.js

app.use(userRoutes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
