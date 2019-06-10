//use the commentController.js to make comments

const router = require('express').Router();

const commentControl = require("../../controllers/commentController");

router.route("/getcomments")
.get(commentControl.getComments)

router.route("/getcommentsbyuser")
.get(commentControl.getCommentsByUser)

router.route("/getcommentsbypost/:id")
.get(commentControl.getCommentsByPost)

router.route("/getcomment/:id")
.get(commentControl.getComment)

router.route("/add")
.post(commentControl.addComment)

router.route("/destroycomment/:id")
.delete(commentControl.deleteComment)

module.exports = router;
