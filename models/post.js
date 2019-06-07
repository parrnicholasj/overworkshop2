module.exports = function(sequelize, DataTypes) {
  
  var Post = sequelize.define("Post", 
  {

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    screenshot: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        'https://www.sccpre.cat/png/big/0/8839_overwatch-logo-png.png',
      validate: {
        isUrl: true
      }
    },
    
    
  });

  Post.associate = function(models) {
    models.Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  Post.associate = function (models) {
    models.Post.hasMany(models.Comment)
  }


  return Post;
};