// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

const homesController=require('../controllers/home');

// Local Module
const { registeredHomes } = require('./hostRouter');

userRouter.get("/",homesController.getHomes);

module.exports = userRouter;