const router = require("./googleroute")

const routers=requrie('express').Router()
const localStrategy=require('passport-local').Strategy;
const signindata=require('../database')

passport.use(new LocalStrategy(
    function(username, password, done) {
      signindata.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));
router.post('/signup',passport.authenticate('local', { failureRedirect: '/login' }),(req,res)=>{

})


module.exports=routers;