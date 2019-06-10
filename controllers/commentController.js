const db = require('../models');

const addComment = (req, res) => {
  console.log(req.body);
  console.log("commentcontroller hitting")
  const {
    content,
    PostId,
    UserId = req.user.id
  } = req.body;
  console.log("adding a comment")
  db.Comment.create({
    content,
    PostId,
    UserId
    }).then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
 }; 

const getComments = (req, res) => {
  db.Comment.findAll({}) 
    .then(dbCommentData => {
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

const getCommentsByPost = (req, res) => {
  db.Comment.findAll({where: {
    PostId: req.params.id
  }}) 
    .then(dbCommentData => {
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

const getCommentsByUser = (req, res) => {
  db.Comment.findAll({where: {
    UserId: req.userId
  }}) 
    .then(dbCommentData => {
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

const getComment = (req, res) => {
  db.Comment.findOne({where: {id : req.params.id}      
  }).then(dbCommentData => {
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

const deleteComment = (req, res) => {//accepts as a parameter
  db.Comment.destroy({  
    where: { id: req.params.id }
  }).then(
    function (data) {res.json(data)}
    ).catch(err => {
      console.log(err);
      res.json(err);
    });
}

module.exports = {
  addComment,
  getComments,
  getCommentsByPost,
  getCommentsByUser,
  getComment,
  deleteComment
}