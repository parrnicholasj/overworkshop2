const router = require('express').Router()
const withAuth = require('../../middleware/authentication');
const fileUploader = require('../../middleware/file-upload');

const {
  getUserProfile,
  register,
  login
} = require('../../controllers/user-controller');

// also hitting authentication here ----------
router
  .route('/')
  .get(getUserProfile);

router
  .route('/login')
  .post(login);

router
  .route('/register')
  .post(fileUploader, register);

module.exports = router;