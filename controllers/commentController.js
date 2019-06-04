const db = require('../models');

const addComment = (req, res) => {
  console.log(req.body);
  console.log("commentcontroller hitting")

  const {
    author,
    authorID,
    content    
  } = req.body;
  console.log("adding a comment")

  db.Comment.create({
    author,
    authorID,
    content
    }).then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });

};
const getComments = (req, res) => {
  db.Comment.findAll({}) //this one is not being used currently
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
  getComment,
  deleteComment
}