const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/user');
const controller = require('../../controllers')
const passport = require('passport');


router.post('/', (req, res, next) => {
    passport.authenticate('local', function(err,user,info){
        console.log(req.body);
        if(err){
            console.log(err);
            return res.status(400);
        }

        if(!user){
            console.log("user not found");
            return res.status(400).json({errors: "nothing found"});
        }

        req.logIn(user, function(err){
            if(err){
                console.log(err);
                return res.status(400);
            }
            return res.status(200);
        })
    })(req,res,next);
});

module.exports = router;