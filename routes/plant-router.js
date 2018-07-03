const express = require("express");
const plantRoutes = express.Router();
const User = require("../models/user-model.js");
const Plant = require("../models/plant-model.js");


// <---------- LISTS OF PLANTS -------------------------
plantRoutes.get("/plants", (req, res, next) => {
    Plant.find()
    .then(plants => {
        //console.log(plants)
        res.render("plant-views/plants.hbs", {plants})
    })
    .catch((err) => {next(err)})
})

plantRoutes.get("/plants/:id", (req, res, next) => {
    //const {plant_id} = req.params;
    console.log("plant id is" + req.params);


    Plant.findById(plant_id)
    .then((plant) => {
        res.send(plant);
        res.locals.plant = plant;
        //res.render("plant-views/plant-details.hbs", {plant})
    })
    .catch((err) => {next(err)})
})

module.exports= plantRoutes;