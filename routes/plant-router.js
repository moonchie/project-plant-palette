const express = require("express");
const plantRoutes = express.Router();
const User = require("../models/user-model.js");
const Plant = require("../models/plant-model.js");
const Project = require("../models/project-model.js");
const mongoose = require("mongoose");
var tempPlant;

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
    const plant_id = req.params.id;
    //res.send(plant_id)


    Plant.findById(plant_id)
    .then((plant) => {
        //res.send(plant);
        res.locals.plant = plant;
        res.render("plant-views/plant-details.hbs", {plant})
    })
    .catch((err) => {next(err)})
})

// <---------------ADD TO PROJECT-----------------------
plantRoutes.get("/plants/:id/save", (req, res, next) => {
    tempPlant = req.params;   // <--- This  is the plantID
    console.log("=============");
    console.log(tempPlant);

    if(!req.user){
        // message: please log in to add this plant to your project
        res.redirect("/login")
    } else {
        const userID = req.user._id;
        Project.find({userID:userID})
            .then(projects => {
                //res.send(projects)
                res.locals.plantID = req.params.id;
                res.render("project-views/temp-list-projects.hbs", {projects})
            })
            .catch((err) => {next(err)})
    }
})


plantRoutes.post("/plants/save/:projectID", (req, res, next) => {
    console.log("************");
    console.log(tempPlant)     //<---- this is an object
    //res.send(tempPlant.id);
    const projectID = req.params.projectID;
    const plantID = req.body.plantID;

    Project.findByIdAndUpdate(
        projectID,
        { $push: {plantArray: plantID},},
        {new: true}
        )
        .then((projects) =>
        {res.send(projects)})
        .catch((err) => next(err))

    // use project ID to add tempPlant to array of objects
    // Project.findByIdAndUpdate(
    //     projectID,
    //     { $push: {plantArray: {plantID}}},
    //     { runValidators: true})
    //     .then((projects) => {
    //         console.log("Record update!" + tempPlant);
    //       res.redirect(`/project/${projectID}`)
    //     })
    //     .catch((err) => {
    //       next(err);
    //     })
})


// <------------ Export plantRoutes ----------------------
module.exports= plantRoutes;