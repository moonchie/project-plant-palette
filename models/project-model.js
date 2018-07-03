const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName:{type: String, required: true},
    projectDescription: {type: String, required: true},
    zone: {type:String, required: true}
},{
    timestamps: true
});


const Project = mongoose.model("Project", projectSchema);

module.exports = Project;