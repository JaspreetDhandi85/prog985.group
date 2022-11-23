const User = require("../models/User");
module.exports=(req, res) => {
    if(req.session.userId)return res.redirect("/");
    
    User.findById(req.session.userId, (error, user) =>{
        if(error || !user) return res.redirect("/");
        next();

    });

}