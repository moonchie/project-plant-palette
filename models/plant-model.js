const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantSchema = new Schema ({
  // document structure and rules definition here
  commonName: { type: String, required: true },
  scientificName: { type: String, minlength: 8 },
  plantType: ["annual", "broadleaf evergreen", "bulb", "Deciduous shrub", "epiphyte", "fern", "fruit", "herbaceous perennial", "needled evergreen", "orchid", "ornamental grass", "palm or cycad", "rush or sedge", "tree", "turfgrass", "vine"],
  // ^^ SEARCH OPIONS, however,
  // only one PLANTTYPE entered in database
      // the user would put in only one zone, referenced by zip code
    // which would correspond to plant's zone range
  zoneMin: { type: Number, min: 1, max: 12},
  zoneMax: { type: Number, min: 1, max: 12},
  sun: [
    { type: String, enum: ["Full sun", "Part shade", "Full shade"] }
  ],
  water: [
    { type: String, enum: ["Dry", "Medium", "Wet"] }
  ],
  growthRate: { type: String },
  maxHeightInFeet: { type: Number },
  maxWidthInFeet: { type: Number },
  info: { type: String, required: true },
  sourceInfo: { type: String },
  pictureUrl: { type: String}
}, {
  // additional settings for schema here
  timestamps: true

});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
