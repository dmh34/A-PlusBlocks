const passport = require('passport');
const passportlocal = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

passport.serializeUser(function(user, done){
    console.log(user);
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    user.findById(id, (err, user) => {
        done(err,user)
    });
});

passport.use(
    new passportlocal({usernameField: "email"}, (email, password,done)=>{
        console.log("trying to find user");
        User.findOne({email: email})
        .then(user=> {
            if(!user){
                console.log("user being created");
                const newUser = new User({email, password});
                console.log("creating user ");
                bcrypt.genSalt(10, (err,salt)=>{
                    bcrypt.hash(newUser.password, salt,(err,hash)=>{
                        newUser.password = hash;
                        newUser.save().then(user=>{
                            return done(err, user);
                        }).catch(err=>{
                            return done(null,false,{message: err});
                        })
                    })
                })
            }else{
                console.log("log in attempted");
                bcrypt.compare(password, user.password, (err, isMatch)=>{
                    if(err) throw err;

                    if(isMatch){
                        return done(null, user);
                    }else{
                        return done(null,false,{message:"wrong username or password"});
                    }
                }).catch(err=>{
                    return done (null,false,{message: err});
                })
            }
        })
    })
)

module.exports = passport;