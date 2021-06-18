
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = new require('connect-mongo');
const mongoose = require('mongoose');

const teacherRoutes = require('./api/routes/teachers');
const classesRoutes = require('./api/routes/classes');
const studentRoutes = require('./api/routes/students');
const userRoutes = require('./api/routes/login');
const passport = require('./auth/index');


mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://appuser:Aya5VqHWRJrMr4YP@testcluster.plcjn.mongodb.net/aplus?retryWrites=true&w=majority");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(session({
    secret: "secert",
    resave: false,
    saveUninitialized: false,
    store:  MongoStore.create({
        mongoUrl: "mongodb+srv://appuser:Aya5VqHWRJrMr4YP@testcluster.plcjn.mongodb.net/aplus?retryWrites=true&w=majority",
        mongooseConnection: mongoose.connection
    })

}));


app.use(passport.initialize());
app.use(passport.session())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin"), "*";
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});




app.use('/teachers', teacherRoutes);
app.use('/classes', classesRoutes);
app.use('/students', studentRoutes);
app.use('/login', userRoutes);



app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            
            message: error.message,
           
        }
    });
});



module.exports = app;