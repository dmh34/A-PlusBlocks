const passport = require('passport');
const passportlocal = require('passport-local');
const bcrypt = require('bcrypt');
const user = require('../models/user');

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    user.findById(id, (err, user) => {
        done(err,user)
    })
})