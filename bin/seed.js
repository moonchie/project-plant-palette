const mongoose = require("mongoose");
const Plant = require("../models/plant-model.js");


// connect to database
// this same chunk is in app.js
mongoose.Promise = Promise;
mongoose // make sure to connect to same DB as in app.js
  .connect('mongodb://localhost/project-plant-palette', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

// plant.create query saves this all to the DB
// create array of data
const plantData = [
  {
    commonName: "Red Maple",
    scientificName: "Acer rubrum",
    plantType: "Tree",
    zoneMin: 4,
    zoneMax: 9,
    sun: ["Full sun", "Part shade", "Full shade"],
    water: ["Dry", "Medium", "Wet"],
    growthRate: "Fast",
    maxHeightInFeet: 75,
    maxWidthInFeet: 35,
    info: "Red Maple has an oval shape and is a fast grower with strong wood, reaching a height of 75 feet (Fig.1). Unless irrigated or on a wet site, Red Maple isbest used north of USDA hardiness zone 9. Trees areoften much shorter in the southern part of its range unless growing next to a stream or on a wet site. This tree is preferred over Silver Maple or Boxelder when a fast growing Maple is needed. When planting the species Acer rubrum, select only those which have been grown from seed sources in your area. The newly emerging leaves and red flowers and fruits signal that spring has come. They appear in December and January in Florida, later in the northern part of its range. The seeds of red maple are quite popular with squirrels and birds. This tree if sometimes confused with red-leaved cultivars of Norway Maple.",
    sourceInfo: "http://hort.ufl.edu/trees/aceruba.pdf"
  },
  {
    commonName: "Flowering Dogwood",
    scientificName: "Cornus florida",
    plantType: "Tree",
    zoneMin: 5,
    zoneMax: 9,
    sun: ["Full sun", "Part shade"],
    water: "Medium",
    growthRate: "Moderate",
    maxHeightInFeet: 30,
    maxWidthInFeet: 30,
    info: "The state tree of Virginia, flowering dogwood grows 20 to 35 feet tall and spreads 25 to 30 feet. It can be trained with one central trunk or as a picturesque multi-trunked tree. The flowers consist of four bracts which subtend the small head of yellow flowers. The bracts may be pink or red depending on cultivar but the species color is white. The fall color depends on site and seed source but on most sun grown plants will be red to maroon. The bright red fruits are often eaten by birds. Fall color is more vivid in USDA hardiness zones 5 to 8a. Branches on the lower half of the crown grow horizontally, those in the upper half are more upright. In time, this can lend a strikingly horizontal impact to the landscape, particularly if some branches are thinned to open up the crown. Lower branches left on the trunk will droop to the ground, creating a wonderful landscape feature.",
    sourceInfo: "http://edis.ifas.ufl.edu/st185"
  },
  {
    commonName: "Live Oak",
    scientificName: "Quercus virginiana",
    plantType: "Tree",
    zoneMin: 7,
    zoneMax: 10,
    sun: ["Full sun", "Part shade"],
    water: "Medium",
    growthRate: "Moderate",
    maxHeightInFeet: 80,
    maxWidthInFeet: 120,
    info: "A large, sprawling, picturesque tree, usually graced with Spanish moss and strongly reminiscent of the Old South. Live oak is one of the broadest spreading of the oaks, providing large areas of deep, inviting shade. It is the state tree of Georgia. Reaching 40 to 60 feet in height with a 60 to 100 foot spread and usually possessing many sinuously curved trunks and branches, live oak is an impressive sight for any large-scale landscape. An amazingly durable American native, it can measure its lifetime in centuries if properly located and cared for in the landscape. It makes an excellent street tree in the South. Unfortunately, oak wilt has devastated the tree in parts of central Texas. Give it plenty of room since the trunk can grow to more than six feet in diameter.",
    sourceInfo: "http://edis.ifas.ufl.edu/st564"
  },
  {
    commonName: "Pignut Hickory",
    scientificName: "Carya Glabra",
    plantType: "Tree",
    zoneMin: 5,
    zoneMax: 9,
    sun: ["Full sun", "Part shade"],
    water: "Medium",
    growthRate: "Moderate",
    maxHeightInFeet: 65,
    maxWidthInFeet: 40,
    info: "A North American native, pignut hickory is usually seen at 50 to 65 feet in height with a 30- to 40-foot spread but is capable of slowly reaching 120 feet in the forest. The deciduous, 6- to 12-inchlong leaves create a coarse, oval canopy, and the strong but irregularly spaced branches resist breakage in storms, making it useful as a shade tree. The green fruits are quite bitter and are popular with various forms of wildlife, but not man. Since fruits may damage cars as they fall and people could roll on the fruit and lose their balance, it may be best to locate the tree away from streets, parking lots, and other areas where cars regularly park. It makes a nice shade tree or median strip tree planted on 25- to 30-foot centers and turns a striking bright yellow in the fall.",
    sourceInfo: "http://edis.ifas.ufl.edu/st121"
  },
  {
    commonName: "Weeping Yaupon Holly",
    scientificName: "Ilex vomitoria 'Pendula'",
    plantType: "Tree",
    zoneMin: 7,
    zoneMax: 9,
    sun: ["Full sun", "Part shade"],
    water: "Medium",
    growthRate: "Moderate",
    maxHeightInFeet: 30,
    maxWidthInFeet: 12,
    info: "Weeping Yaupon Holly makes a very distinct, irregular, weeping form with its upright crooked trunks and slender, curved, pendulous branches clothed with small, oval, grey-green foliage. Many nursery operators produce this tree with several trunks in a clump. Capable of reaching 30 feet or more in height, Weeping Yaupon Holly is most often seen 15 to 20 feet tall with a spread of only 6 to 12 feet. Old plants will spread to 25 feet. The inconspicuous male and female flowers appear on separate plants and are followed in fall and winter by a spectacular display of the translucent red berries which attract wildlife. The flowers attract bees for several weeks. Purchase plants with berries on them (females) if you want a berry-producing tree.",
    sourceInfo: "http://edis.ifas.ufl.edu/st312"
  }]


  // ----------- CREATE ------------------
Plant.create(plantData)                                       //use the Book model
    .then((plants) => {
        console.log(`Created ${plants.length} plants in the dataBase`);
    })
    .catch((err) => {
        console.log("Create plants FAIL!")
    });