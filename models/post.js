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
      type: DataTypes.STRING,
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
        'https://scontent.fewr1-3.fna.fbcdn.net/v/t31.0-8/906416_10103157316469369_986850834_o.jpg?_nc_cat=0&oh=ff1c6ad4081e24bae8e9cd57ced0b182&oe=5B8306B7',
      validate: {
        isUrl: true
      }
    }
    
  });
  return Post;
};