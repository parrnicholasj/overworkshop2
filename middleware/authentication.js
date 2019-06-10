const authCheck = (req, res, next) => {
  // if user is not logged in
  if (!req.user) {
    res.json({
      message: "User not logged in!"
    });
  } else {
    next();
  };
};

module.exports = authCheck;