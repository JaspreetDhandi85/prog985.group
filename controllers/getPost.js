
const BlogPost = require("../models/BlogPost") 

module.exports = async (req, res) => {
   const blogPosts = await BlogPost.findById(req.params.id);
     res.render("index", {blogPosts});
  };