const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect("mongodb+srv://jaspreet:Kaloundi96@cluster0.m2obwkw.mongodb.net/?retryWrites=true&w=majority",
 { useNewUrlParser: true }
);

BlogPost.find({},(error, blogpost) =>{
    console.log(error, blogpost);
})