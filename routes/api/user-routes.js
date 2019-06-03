const router = require('express').Router();
const passport = require('passport');

const userController = require('../../controllers/user-controller');

router.get('/login').get(userController.login)