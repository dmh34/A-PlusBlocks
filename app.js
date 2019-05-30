const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const teacherRoutes = require('./api/routes/teachers');
const classesRoutes = require('./api/routes/classes');
const studentRoutes = require('./api/routes/students')
const mongoose = require('mongoose');

const jwt = require("express-jwt");
const jwtAuthz = require("express-jwt-authz");
const jwksRsa = require("jwks-rsa");

const checktJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://aplusauth.auth0.com/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: 'http://localhost:3001/api/students',
    issuer: `https://aplusauth.auth0.com/`,
    algorithms: ['RS256']
})

const checkScopes = jwtAuthz(['read:students', 'write:students']);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aPlusQuiz");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;