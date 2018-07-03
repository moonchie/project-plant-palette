const express = require("express");
const projectRoutes = express.Router(); // this is the router object for project router sets

const Project = require("../models/project-model.js");

// <------- USER CENTER------->

projectRoutes.get("/center", (req, res, next) => {
  Project.find()
    .then(projects => {
        res.render("project-views/user-center.hbs", {projects})
    })
    .catch((err) => {next(err)})
});


// <--------- CREATE A PROJECT ---------->

projectRoutes.get("/project/create", (req, res, next) => {
  res.render("project-views/create-project.hbs");
});

projectRoutes.post("/process-creation", (req, res, next) => {
  const projectName = req.body.proName;
  const projectDescription = req.body.proDescription;
  const location = req.body.proLocation;

  // name and location of the project cannot be empty
  if(projectName ==="" || location ===""){
    // message: name and location cannot be empty
    res.redirect("/center")
  } else {

    Project.create({projectName, projectDescription, location})
    .then((project) => {
      console.log("==================");
      console.log(projectName + " is saved to projects database! ");
      res.redirect("/center");
    })
    .catch((err) => {
      next(err);
    })
  }
})


// <----------- Remove a project ------------>



// <------------ One project details ---------->
projectRoutes.get("/project/:id", (req, res, next) => {
  const project_id = req.params.id;


  Project.findById(project_id)
  .then((project) => {
      res.locals.project = project;
      res.render("project-views/project-details.hbs", {project})
  })
  .catch((err) => {next(err)})
})


module.exports= projectRoutes;