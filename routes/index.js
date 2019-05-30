const router = require('express').Router();
const apiRoutes = require('./api');

router.use(apiRoutes);

router.use((req, res) => {
  res.json({
    message: "404 Bro"
  })
});

module.exports = router;
