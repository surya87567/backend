// Core Modules
const path = require('path');

// External Module
const express = require('express');
const storeRouter = express.Router();

// Local Module
const { registeredHomes } = require('./hostRouter');

const homesController = require('../controllers/storeController');
storeRouter.get("/homes", homesController.getHome);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/", homesController.getIndex);
storeRouter.get("/favourites", homesController.getFavouriteList);
storeRouter.get("/homes/:homeId",homesController.getHomeDetails);
storeRouter.post("/favourites",homesController.postAddToFavourite);

module.exports = storeRouter;