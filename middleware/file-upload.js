const formidable = require('formidable');
const cloudinary = require('cloudinary').v2;

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const fileUpload = (req, res, next) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json(err);
    }
    req.body = { ...fields };
    if (files.profilePic) {
      cloudinary.uploader.upload(files.profilePic.path, function(err, result) {
        if (err) {
          return res.status(500).json(err);
        }
        req.body.profilePic = result.secure_url;
        next();
      });
    } else {
      next();
    }
  });
};

module.exports = fileUpload;
