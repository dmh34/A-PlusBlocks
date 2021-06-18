const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the TeachersController
module.exports = {
  findAll: function (req, res) {
    if (req.isAuthenticated()) {
      db.Teacher.find()
        .select('firstName lastName classes students _id')
        .populate('classes', 'grade teacher students subject')
        .populate('students', 'firstName lastName gradeYear classes')
        .exec()
        .then(docs => {
          const response = {
            count: docs.length,
            teachers: docs.map(doc => {
              return {
                firstName: doc.firstName,
                lastName: doc.lastName,
                classes: doc.classes,
                students: doc.students,
                _id: doc._id,
                request: {
                  type: 'GET',
                  url: 'http://localhost:3000/teachers/' + doc._id
                }
              }
            })
          }
          console.log(response);
          res.status(200).json(response);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            message: "problem with getting teachers",
            error: err
          });
        });
    } else {
      res.status(400).json({ message: "user not logged in" })
    }
  },
  findById: function (req, res) {
    if(req.isAuthenticated()){
    const id = req.params.teacherId;
    db.Teacher.findById(id).exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res.status(404).json({ message: 'No valid entry found' })
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "no valid entry", error: err });
      });
    }else{
      res.status(400).json({ message: "user not logged in" })
    }
  },

  create: function (req, res) {
    if (req.isAuthenticated()) {
      const teacher = new db.Teacher({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        classes: [],
        students: []
      });
      teacher.save()
        .then(result => {
          console.log(result);
          res.status(200).json({
            message: 'Handling  POST requests to /teachers',
            createdTeacher: teacher
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    }else{res.status(400).json({ message: "user not logged in" })}
   
  },

  update: function (req, res) {
    const id = req.params.teacherId
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    db.Teacher.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(500).json(result);
      });
  },
  remove: function (req, res) {
    if(req.isAuthenticated()){
    const id = req.params.teacherId;
    db.Teacher.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err })
      });
  }else{
    res.status(400).json({ message: "user not logged in" })
  }
}
}
