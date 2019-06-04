const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./apiPostRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/auth', userRoutes);//anything in the userroutes must be prefixed with /user
router.use('/posts', postRoutes);

router.use('/comments', commentRoutes);

module.exports = router;
