const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user-model.js");


// <---------- SIGN UP ---------------->

authRoutes.get("/signup", (req, res, next) => {
    res.render("auth-views/signUp-form.hbs");
})

authRoutes.post("/process-signup", (req, res, next) => {
    //res.send(req.body)
    const userName = req.body.userName;
    const email = req.body.email;
    const profession = req.body.profession;
    let encryptedPassword;


    if(req.body.password === "" || req.body.password.match(/[0-9]/) === null){
        // message: please enter a valid password!
        res.redirect("/signup");
        return
    } else {
        encryptedPassword = bcrypt.hashSync(req.body.password, 10);
    }

    User.create({ userName, email, profession, encryptedPassword})
    .then((users) => {
        console.log("data saved to DB!");
        // message: success! you have signup, please log in.
        res.redirect("/");
    })
    .catch((err) => {
        next(err);
    })
})


// <--------------LOG IN -------------------------->

authRoutes.get("/login", (req, res, next) => {
    res.render("auth-views/logIn-form.hbs")
})

authRoutes.post("/process-login", (req, res, next) => {
    //res.send(req.body);
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
    .then((user) => {
        if (!user){
            // message: please enter a valid email!
            res.redirect("/login");}
        else {
            const {encryptedPassword} = user;

            if (!bcrypt.compareSync(password, encryptedPassword)){
                // message: error, incorrect password
                res.redirect("/login");
                return;
            } else {
                // ------------- ERROR HERE!
                req.login(user, () => {
                    res.redirect("/")
                })
                }
            }
    })
    .catch((err) => {next(err)})
})



module.exports= authRoutes;



