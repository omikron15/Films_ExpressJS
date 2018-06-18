const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');

const express = require('express');
const filmRouter = new express.Router();

filmRouter.get("/:id", function(req, res){

})

filmRouter.get("/", function(req, res){
  res.json({data: films});
})

filmRouter.put("/:id", function(req, res){

})

filmRouter.post("/", function(req, res){

})

filmRouter.delete("/:id", function(req, res){

})

module.exports = filmRouter;
