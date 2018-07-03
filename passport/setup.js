const passport = require("passport");
const User = require("../models/user-model.js");


passport.serializeUser((userDoc, done) => {
    console.log("SERIALIZE (save to session)");
    done(null, userDoc._id)
});

passport.deserializeUser((idFromSession, done) =>{
    console.log("deSERIALIZE (details from the database)");

    User.findById(idFromSession)
        .then((userDoc) => {
            done(null, userDoc);
        })
        .catch((err) => {
            done(err);
        });

})

function passportSetup (app) {
    // add Passport properties & methods to the req obkect in our routes
        app.use(passport.initialize());
        app.use(passport.session());

        app.use((req, res, next) => {
            // make "req.user" accessible inside hbs files as "blahUser"
            res.locals.blahUser = req.user;

            // make flash messages accessible inside hbs files as "messages"
            res.locals.messages = req.flash();

            next();
        })
    }


    module.exports = passportSetup;