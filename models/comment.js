module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Post", 
  {

    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authorID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    }
    
    
  });
  return Comment;
};