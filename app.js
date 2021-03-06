const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const teacherRoutes = require('./api/routes/teachers');
const classesRoutes = require('./api/routes/classes');
const studentRoutes = require('./api/routes/students')
const mongoose = require('mongoose');




mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aPlusQuiz");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin"), "*";
//     res.header("Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// });

app.use('/teachers', teacherRoutes);
app.use('/classes', classesRoutes);
app.use('/students', studentRoutes);



module.exports = app;