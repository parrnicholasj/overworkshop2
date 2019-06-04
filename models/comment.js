module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", 
  {

    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authorID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
    
    
  });
  return Comment;
};