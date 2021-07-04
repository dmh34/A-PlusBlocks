const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const User = require('../../models/user');
const controller = require('../../controllers')
const passport = require('passport');


router.post('/', (req, res, next) => {
    passport.authenticate('local', function(err,user,info){
        //console.log(req.body);
        //user = req.body;
        console.log(info);
        if(err){
            console.log(err);
            return res.status(400);
        }
        console.log(user)
        if(!user){
            console.log("user not found");
            return res.status(401).json({errors: "nothing found"});
        }

        req.logIn(user, function(err){
            console.log("login")
            if(err){
                console.log(err);
                return res.status(400);
            }
            console.log("user found");
            return res.status(200).json({mes: "something happened"});
        })
    })(req,res,next);
});

module.exports = router;