// Core Module
//const path = require('path'); this is also not in use 

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
//const rootDir = require("../utils/pathUtil"); this is not in use 

const homesController=require('../controllers/home');

hostRouter.get("/add-home",homesController.getAddHome);


hostRouter.post("/add-home",homesController.postAddHome);

exports.hostRouter = hostRouter;
const registeredHomes=homesController.registeredHomes;
exports.registeredHomes=registeredHomes;