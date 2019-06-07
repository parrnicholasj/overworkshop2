module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", 
  {

   
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
    
    
  });

  Comment.associate = function (models) {
    models.Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  
  Comment.associate = function (models) {
    models.Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  
  return Comment;
};