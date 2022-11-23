const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect(
"mongodb+srv://jaspreet:Kaloundi96@cluster0.m2obwkw.mongodb.net/?retryWrites=true&w=majority",
 { useNewUrlParser: true }
);

var id = "63346433553fa307aee4f9ff";

BlogPost.findByIdAndDelete(id,
    { title:"Updated Title" },
     (error, blogpost) =>{
        console.log(error, blogpost);

});