const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const controller = require("../../controllers");

router.get('/', (req, res, next) => {
	
	controller.StudentController.getAllStudents(req, res);
});

router.post('/', (req, res, next) => {
	
	controller.StudentController.addStudents(req, res);
});

router.get('/:studentId', (req, res, next) => {
	
	controller.StudentController.findStudentById(req, res);
});

// PATCH :classesId req.body looks something like: 
// [{"propName": "subject", "value": "Basic Training" }]

router.patch('/:studentId', (req, res, next) => {
	

	controller.StudentController.updateStudents(req, res);
});

/* 
	The /getclasses/:studentId route finds all classes that include the students Id (ie. Classes teachers assign them too),
	builds a new list of all classes and populates the students 'classes' array with it.

*/

router.patch('/getclasses/:studentId', (req, res, next) => {
	
	controller.StudentController.findAllStudentClasses(req, res);
});

router.delete('/:studentId', (req, res, next) => {
	
	controller.StudentController.removeStudent(req, res);
});

module.exports = router;