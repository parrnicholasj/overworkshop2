const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  User.prototype.validPassword = function (password) {

    // ?? why are we calling the constant 'document' event though we 're using sql/sequalize;
    // ?? what is 'this' referring to in this case/scope;
    const document = this;
    
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, document.password, function compareCallback(err, same) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(same);
        }
      });
    });
  };

  // ?? beforeCreate is a built in function??

  User.beforeCreate(function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(1), null);
  });
  
  return User;

  // ??how can we transfer and implement the following in sequelize??
  // if (this.isNew || this.isModified('password'))
  
};