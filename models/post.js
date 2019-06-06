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
        'https://i.etsystatic.com/13105519/r/il/347952/1187963224/il_794xN.1187963224_fkxr.jpg',
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