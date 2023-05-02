const jwt=require("jsonwebtoken");
const register=require("../models/register");
require('dotenv').config();
const apiKey=process.env.SECRET_KEY;
const auth=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        const verifyToken=jwt.verify(token,"Kisan_app_authentication");
        const user=await register.findOne({_id:verifyToken._id});
        next();
        req.token=token;
        req.user=user;
    }catch(error){
        res.send(error);
    }
};
module.exports=auth;