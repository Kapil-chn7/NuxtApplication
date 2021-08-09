const router=require('express').Router();

const passport=require('passport');



router.get('/google',passport.authenticate('google',{scope:['profile']}));

// router.get('/google',(req,res)=>{
//     res.send('working')
// })
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
   
    res.send("this is the google redirect");
})


module.exports=router;