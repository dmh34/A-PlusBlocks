const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Classes = require('../../models/classes');
const Teacher = require('../../models/teacher');
const Student = require('../../models/student');
const controller = require("../../controllers");

router.get('/', (req, res, next) => {

	controller.classesController.findAll(req,res);
});

router.post('/', (req, res, next) => {
	
	controller.classesController.create(req,res);
});

router.get('/:classesId', (req, res, next) => {
	
	controller.classesController.findById(req,res);
});

// PATCH :classesId req.body looks something like: 
// [{"propName": "subject", "value": "Basic Training" }]
// for editing values NOT adding students


router.patch('/:classesId', (req, res, next) => {
	

	controller.classesController.update(req,res);
		
});

// PATCH /addstudent/:classesId req.body looks something like: 
// {"studentId": "5cecef0c6bfac03c4455dcd6"}
// for adding students via NOT changing values

router.patch('/addstudent/:classesId', (req, res, next) => {
	
	controller.classesController.addStudentToClass(req,res);
});

router.delete('/:classesId', (req, res, next) => {
	
	controller.classesController.delete(req,res);
});

module.exports = router;