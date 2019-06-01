const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Teacher = require('../../models/teacher');
const controller = require("../../Controllers");

router.get('/', (req, res, next) => {
  // Teacher.find()
  //   .select('firstName lastName classes students _id')
  //   .populate('classes', 'grade teacher students subject')
  //   .populate('students', 'firstName lastName gradeYear classes')
  //   .exec()
  //   .then(docs => {
  //     const response = {
  //       count: docs.length,
  //       teachers: docs.map(doc => {
  //         return {
  //           firstName: doc.firstName,
  //           lastName: doc.lastName,
  //           classes: doc.classes,
  //           students: doc.students,
  //           _id: doc._id,
  //           request: {
  //             type: 'GET',
  //             url: 'http://localhost:3000/teachers/' + doc._id
  //           }
  //         }
  //       })
  //     }
  //     console.log(response);
  //     res.status(200).json(response);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json({
  //       error: err
  //     });
  //   });
  controller.teacherController.findAll(req,res);
});

// POST req.body looks something like: 
// {"firstName": "Big", "lastName": "Boss"}


router.post('/', (req, res, next) => {
  // const teacher = new Teacher({
  //   _id: new mongoose.Types.ObjectId(),
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   classes: [],
  //   students: []
  // });

  // teacher.save()
  //   .then(result => {
  //     console.log(result);
  //     res.status(200).json({
  //       message: 'Handling  POST requests to /teachers',
  //       createdTeacher: teacher
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json({
  //       error: err
  //     });
  //   });

  controller.teacherController.create(req,res);


});

router.get('/:teacherId', (req, res, next) => {
  // const id = req.params.teacherId;
  // Teacher.findById(id).exec()
  //   .then(doc => {
  //     console.log("From database", doc);
  //     if (doc) {
  //       res.status(200).json(doc);
  //     } else {
  //       res.status(404).json({ message: 'No valid entry found' })
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json({ error: err });
  //   });

  controller.teacherController.findById(req,res);
});

// PATCH :classesId req.body looks something like: 
// [{"propName": "subject", "value": "Basic Training" }]

router.patch('/:teacherId', (req, res, next) => {
  // const id = req.params.teacherId
  // const updateOps = {};
  // for (const ops of req.body) {
  //   updateOps[ops.propName] = ops.value;
  // }
  // Teacher.update({ _id: id }, { $set: updateOps })
  //   .exec()
  //   .then(result => {
  //     console.log(result);
  //     res.status(500).json(result);
  //   });

  controller.teacherController.update(req,res);
});


router.delete('/:teacherId', (req, res, next) => {
  // const id = req.params.teacherId;
  // Teacher.remove({ _id: id })
  //   .exec()
  //   .then(result => {
  //     res.status(200).json(result);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json({ error: err })
  //   });

  controller.teacherController.remove(req,res);
});



module.exports = router;

