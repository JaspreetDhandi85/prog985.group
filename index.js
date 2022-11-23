require("dotenv").config();


const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const mongoStore = require("connect-mongo");
const expressSession = require("express-session");
//const bodyParser = require("body-parse");
const BlogPost = require("./models/BlogPost");
const fileupload= require("express-fileupload");
const customValidate= require("./middlewares/customValidate");
const auth= require("./middlewares/authentication");
const redirectIfAuth = require ("./middlewares/redirectIfAuth");
const loggedInMiddleware = require ("./middlewares/loggedIn")
const newPostController = require("./controllers/newPost");
const homeController = require("./controllers/home");
const getPostController = require("./controllers/getPost");
const storePostController = require("./controllers/storePost");
const registerController = require("./controllers/newUser");
const storeUserController = require("./controllers/storeUser");
const loginUserController = require("./controllers/loginUser");
const loginController = require("./controllers/login");



const app = new express();

app.use(fileupload());



app.use(express.json());

global.loggedIn = null;
app.use(expressSession({
  secret: "jass985",
  resave: false,
  saveUninitialized: true,
  store:mongoStore.create({mongoUrl: process.env.MONGO_URL}),
  
}));

//app.use("*", (req, res, next)=>{
 // loggedIn = req.session.userId ? true : false;

  //next();
//})

app.use(expressSession({secret:"jass985", resave:false, saveUninitialized:true}));

app.use("*", loggedInMiddleware);

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.use("/posts/store", customValidate);
app.set("view engine", "ejs");
mongoose.connect(process.env.MONGO_URL,
 { useNewUrlParser: true}
  );
 

const port = 4093;

app.get("/", homeController);


app.get("/post/:id",getPostController);
app.get("/posts/new", auth, newPostController);

  
app.post("/posts/store", storePostController);

app.get("/auth/register", registerController);
app.post("/user/register", redirectIfAuth, storeUserController);

app.get("/auth/login", loginController);
app.post("/user/login", redirectIfAuth, loginUserController);


         
     
  app.listen(port, () => {
  console.log("App Listening on Port " + port);
});
