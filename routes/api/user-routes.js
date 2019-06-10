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
  let redirectPath = (process.env.NODE_ENV === "production") ? "/" : "http://localhost:3000"
  // redirectPath = `${redirectPath}/?userId=${req.user._id}`;
  // res.json(req.user);
  res.redirect(redirectPath);
  // req.logout();
  // res.redirect('/');
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  let redirectPath = (process.env.NODE_ENV === "production") ? "/" : "http://localhost:3000"
  // redirectPath = `${redirectPath}/?userId=${req.user._id}`;
  res.redirect(redirectPath);
  // res.redirect('localhost:3000');
  // res.send(req.user);
  //--------- redirect them to 'profile page or home page' 
  
});

router
  .route('/status')
  .get((req, res) => {
    if (req.user) {
      console.log({ ...req.user, isLoggedIn: true });
      res.json({ ...req.user._doc, isLoggedIn: true })
    } else {
      res.json({ isLoggedIn: false });
    }
  })

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