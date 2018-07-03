const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName:{type: String, required: true },
    projectDescription: {type: String},
    location: {type: String, required: true},
    plants: {type: Array}
},{
    timestamps: true
});


const Project = mongoose.model("Project", projectSchema);

module.exports = Project;