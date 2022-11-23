const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect(
"mongodb+srv://jaspreet:Kaloundi96@cluster0.m2obwkw.mongodb.net/?retryWrites=true&w=majority",
 { useNewUrlParser: true}
);

 BlogPost.create(
    {title:"My first blog post",
     body:"This is actually just a CRUD test",
     username: "jaspreet"
},
(error,blogpost) => {
    console.log(error, blogpost);
}
);
 