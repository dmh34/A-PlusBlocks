const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Teacher = require('../../models/teacher');
const controller = require("../../controllers");

router.get('/', (req, res, next) => {
  
  controller.teacherController.findAll(req,res);
});

// POST req.body looks something like: 
// {"firstName": "Big", "lastName": "Boss"}


router.post('/', (req, res, next) => {
 
  controller.teacherController.create(req,res);


});

router.get('/:teacherId', (req, res, next) => {
  

  controller.teacherController.findById(req,res);
});

// PATCH :classesId req.body looks something like: 
// [{"propName": "subject", "value": "Basic Training" }]

router.patch('/:teacherId', (req, res, next) => {
 

  controller.teacherController.update(req,res);
});


router.delete('/:teacherId', (req, res, next) => {
  

  controller.teacherController.remove(req,res);
});



module.exports = router;

