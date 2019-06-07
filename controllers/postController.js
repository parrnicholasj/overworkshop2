var sequelize = require('sequelize');

const db = require('../models');


const addPost = (req, res) => { //adds a post screenshots optional
  console.log(req.body);
  console.log("postcontroller hitting")
  console.log('-----------' + req.user);
  if (!req.user) {
    console.log('not logged in');
    return 
  }

  const {
    title,
    link,
    desc,
    screenshot
  } = req.body;

  const UserId = req.user.id;
  console.log(req.user.id)
  console.log("adding a post")

  db.Post.create({
      title,
      link,
      desc,
      UserId,
      screenshot
    }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });

};
const getPosts = (req, res) => {
  db.Post.findAll({order: sequelize.literal('id DESC')})
    .then(dbPostData => {
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

const getPostsPopular = (req, res) => {
  db.Post.findAll({order: [sequelize.literal('score DESC'), sequelize.literal('id DESC')]})
    .then(dbPostData => {
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

const getPostsByUser = (req, res) => {
  db.Post.findAll({where: {
    UserId: req.userId
  }}) .then(dbPostData => {
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

const getPost = (req, res) => {
  console.log("getting post");
  db.Post.findOne({where: {id : req.params.id}      
  }).then(dbPostData => {
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

const deletePost = (req, res) => {//accepts as a parameter
  db.Post.destroy({  
    where: { id: req.params.id }
  }).then(
    function (data) {res.json(data)}
    ).catch(err => {
      console.log(err);
      res.json(err);
    });
}

const updatePost = (req, res) => {

console.log(req.body);

  const {
    title,
    link,
    desc,
    screenshot
  } = req.body;

  console.log(req.body.title);

  db.Post.findOne({where: {id : req.params.id}
      
    }).then(dbPostData => {dbPostData.update({
      title,
      link,
      desc,
      screenshot
    })}).then(updatedData => res.json(updatedData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });

}

const upVotePost = (req, res) => {
  console.log("updooting")

  var newScore;
  db.Post.findOne({where: {id : req.params.id}
      
  }).then(dbScore => {

    newScore = dbScore.score;
    newScore++;
    console.log(newScore);
    dbScore.update({
      score: newScore
    })

  }
  ).then(updatedData => res.json(updatedData))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
}

const downVotePost = (req, res) => {

  var newScore;
  db.Post.findOne({where: {id : req.params.id}
      
  }).then(dbScore => {

    newScore = dbScore.score;
    newScore--;
    console.log(newScore);
    dbScore.update({
      score: newScore
    })

  }
  ).then(updatedData => res.json(updatedData))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
}

module.exports = {
  addPost,
  getPosts,
  getPostsPopular,
  getPostsByUser,
  getPost,
  deletePost,
  updatePost,
  upVotePost,
  downVotePost
}