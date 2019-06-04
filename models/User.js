// const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
      // allowNull: false,
      // unique: true
    },
    googleId: {
      type: DataTypes.STRING
    }
  });

  return User;

  // ??how can we transfer and implement the following in sequelize??
  // if (this.isNew || this.isModified('password'))
  
};