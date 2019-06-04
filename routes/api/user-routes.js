const router = require('express').Router()
const passport = require('passport');
const userControl = require('../../controllers/user-controller');

// authCheck is important middleware to prevent unlogged in user to prevent desired actions
const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect('/');
  } else {
    next();
  }
}


// router.get('/login', authCheck, (req, res) => {
//   res.render('not logged in')
//   // res.redirect('/')
// })

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send(req.user);
  //--------- redirect them to 'profile page or home page' 
  
});

// router.route("/newuser")
//   .post(userControl.register)//use multipart to test in insomnia... <- why tho??

// const {
//   getUserProfile,
//   register,
//   login
// } = require('../../controllers/user-controller');

// also hitting authentication here ----------
// router
//   .route('/')
//   .get(getUserProfile);

// router
//   .route('/login')
//   .post(login);

// router
//   .route('/register')
//   .post(fileUploader, register);

module.exports = router;