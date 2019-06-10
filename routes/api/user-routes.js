const router = require('express').Router()
const passport = require('passport');
router
  .route('/logout')
  .get((req, res) => {
    // handle with passport
    let redirectPath = (process.env.NODE_ENV === "production") ? "/" : "http://localhost:3000"
    req.logout();
    res.redirect(redirectPath);
  });

// auth with google
router
  .route('/google')
  .get(passport.authenticate('google', {
    scope: ['profile email']
  }
  ));

// callback route for google to redirect to
router
  .route('/google/redirect')
  .get(passport.authenticate('google'), (req, res) => {
    let redirectPath = (process.env.NODE_ENV === "production") ? "/" : "http://localhost:3000"
    redirectPath = `${redirectPath}/?userId=${req.user._id}`;
    // res.json(req.user);
    res.redirect(redirectPath);
  });

router
  .route('/status')
  .get((req, res) => {
    if (req.user) {
      res.json({ ...req.user._doc, isLoggedIn: true })
    } else {
      res.json({ isLoggedIn: false });
    }
  })

  
module.exports = router;