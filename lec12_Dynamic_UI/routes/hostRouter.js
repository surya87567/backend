// core module//
const path=require('path');

const express=require('express');
const hostRouter=express.Router();
const rootDir=require('../utils/pathUtil');

hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','addHome.html'));
});

const registeredHome=[];

hostRouter.post("/add-home",(req,res,next)=>{
  console.log("house name registered successfully",req.body,req.body.houseName);
  registeredHome.push({houseName: req.body.houseName});
  res.sendFile(path.join(rootDir,'views','homeAdded.html'));
})

exports.hostRouter=hostRouter;
exports.registeredHome=registeredHome;