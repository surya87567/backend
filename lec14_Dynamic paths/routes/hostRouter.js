// Core Module
//const path = require('path'); also not in use 

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
//const rootDir = require("../utils/pathUtil"); not in use 

const hostController = require('../controllers/hostController');

hostRouter.get("/add-home", hostController.getAddHome);

hostRouter.post("/add-home", hostController.postAddHome);
hostRouter.get("/host-home-list", hostController.getHostHomes);

module.exports = hostRouter;
