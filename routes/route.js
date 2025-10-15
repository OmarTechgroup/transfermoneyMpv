const express = require('express');
const router = express.Router();



router.get("/",(req,res)=>{
    res.render("auth/register/register");
})

router.get("/login",(req,res)=>{
    res.render("auth/login/login");
})


router.get("/home",(req,res)=>{
    res.render("home/index");
})






module.exports = router;


