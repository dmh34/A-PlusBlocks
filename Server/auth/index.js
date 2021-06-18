const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

passport.serializeUser(function(user, done){
    console.log(user);
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    console.log("looking for user")
    console.log(id);
    User.findById(id, (err, user) => {
        console.log("finding user");
        done(err,user)
    });
});

passport.use(
    new LocalStrategy({usernameField: "email"}, (email, password,done)=>{
       console.log("loaded");
       console.log(email);
       console.log(password);
       
        User.findOne({email: email})
        .then(user=> {
            if(!user){
             
                const newUser = new User({ email, password});
                newUser.passport = password;
               
                bcrypt.genSalt(10, (err,salt)=>{
                    bcrypt.hash(newUser.password, salt,(err,hash)=>{
                        newUser.password = hash;
                        newUser.instructor = false;
                        newUser.save().then(user=>{
                            return done(err, user);
                        }).catch(err=>{
                            return done(null,false,{message:"Database error" + err});
                        })
                    })
                })
            }else{
                console.log("log in attempted");
                bcrypt.compare(password, user.password, (err, isMatch)=>{
                    if(err) throw err;

                    if(isMatch){
                        console.log("user found");
                        return done(null, user);
                    }else{
                        return done(null,false,{message:"wrong username or password"});
                    }
                })
                
            }
        })
    })
)

module.exports = passport;