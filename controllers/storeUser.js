const User = require("../models/User") 


module.exports = async (req,res)=>{
    try {
        await User.create(req.body);
        res.redirect("/");
  } catch(e) {
    console.log(e);
  }
  }