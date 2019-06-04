//use the postController.js to make posts

const router = require('express').Router();
const fileUploader = require('../../middleware/fileUpload');

const postControl = require("../../controllers/postController");

router.route("/getPosts")
.get(postControl.getPosts)

router.route("/getPostsbyuser")
.get(postControl.getPostsByUser)

router.route("/getPost/:id?")
.get(postControl.getPost)

router.route("/add")
.post(postControl.addPost)//use multipart to test in insomnia

router.route("/updatepost/:id")
.put(postControl.updatePost)

router.route("/upvotepost/:id")
.put(postControl.upVotePost)

router.route("/downvotepost/:id")
.put(postControl.downVotePost)

router.route("/destroypost/:id")
.delete(postControl.deletePost)

module.exports = router;

