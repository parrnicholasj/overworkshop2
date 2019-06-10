const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

router.use(apiRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
