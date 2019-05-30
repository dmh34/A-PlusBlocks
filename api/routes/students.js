const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Classes = require('../../models/classes');
const Teacher = require('../../models/teacher');
const Student = require('../../models/student');
const controller = require("../../controllers");

router.get('/', (req, res, next) => {
	// Student.find()
	// 	.select('firstName lastName gradeYear teacher classes _id')
	// 	.populate('classes', 'subject teacher grade')
	// 	.exec()
	// 	.then(docs => {
	// 		res.status(200).json({
	// 			count: docs.length,
	// 			students: docs.map(doc => {
	// 				return {
	// 					_id: doc._id,
	// 					firstName: doc.firstName,
	// 					lastName: doc.lastName,
	// 					teacher: doc.teacher,
	// 					classes: doc.classes,
	// 					gradeYear: doc.gradeYear,
	// 					request: {
	// 						type: 'GET',
	// 						url: 'http://localhost:3000/students/' + doc._id
	// 					}
	// 				}
	// 			})
	// 		});
	// 	})
	// 	.catch(err => {
	// 		res.status(500).json(err)
	// 	});
	controller.studentController.addStudents(req, res);
});

router.post('/', (req, res, next) => {
	// Teacher.findById(req.body.teacher)
	// 	.then(teacher => {
	// 		if (!teacher) {
	// 			return res.status(404).json({
	// 				message: "Teacher not found"
	// 			});
	// 		}
	// 		const student = new Student({
	// 			_id: mongoose.Types.ObjectId(),
	// 			firstName: req.body.firstName,
	// 			lastName: req.body.lastName,
	// 			teacher: req.body.teacher,
	// 			gradeYear: req.body.gradeYear
	// 		});
	// 		return student.save();
	// 	})
	// 	.then(result => {
	// 		console.log(result);
	// 		res.status(201).json({
	// 			message: 'Student created',
	// 			createdStudent: {
	// 				_id: result._id,
	// 				firstName: result.firstName,
	// 				lastName: result.lastName,
	// 				teacher: result.teacher,
	// 				gradeYear: result.gradeYear
	// 			},
	// 			request: {
	// 				type: 'GET',
	// 				url: 'http://localhost:3000/students/' + result._id
	// 			}
	// 		});
	// 		Teacher.findOneAndUpdate({ _id: result.teacher }, { $push: { students: result._id } },
	// 			function (error, success) {
	// 				if (error) {
	// 					console.log(error);
	// 				} else {
	// 					console.log(success);
	// 				}
	// 			});
	// 	})
	// 	.catch(err => {
	// 		console.log(err);
	// 		res.status(500).json({
	// 			error: err
	// 		});
	// 	});
	controller.studentController.addStudents(req, res);
});

router.get('/:studentId', (req, res, next) => {
	const id = req.params.studentId;
	Student.findById(id)
		.exec()
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
			res.status(500).json({ error: err });
		});
});

// PATCH :classesId req.body looks something like: 
// [{"propName": "subject", "value": "Basic Training" }]

router.patch('/:studentId', (req, res, next) => {
	const id = req.params.studentId;
	const updateOps = {};
	for (const ops of req.body) {
		updateOps[ops.propName] = ops.value;
	}
	Student.update({ _id: id }, { $set: updateOps })
		.exec()
		.then(result => {
			console.log(result);
			res.status(500).json(result);
		});
});

/* 
	The /getclasses/:studentId route finds all classes that include the students Id (ie. Classes teachers assign them too),
	builds a new list of all classes and populates the students 'classes' array with it.

*/

router.patch('/getclasses/:studentId', (req, res, next) => {
	Classes.find({ students: req.params.studentId })
		.exec()
		.then(result => {
			console.log(result);
			res.status(500).json(result);
			let classList = [];
			for (let i = 0; i < result.length; i++) {
				classList.push(result[i]._id)
				console.log(classList)
			}
			return classList;
		})
		.then(classList => {
			Student.findOneAndUpdate({ _id: req.params.studentId }, { $set: { classes: classList } },
				function (error, success) {
					if (error) {
						console.log(error);
					} else {
						console.log(success);
					}
				});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: err });
		})
});

router.delete('/:studentId', (req, res, next) => {
	const id = req.params.studentId;
	Student.remove({ _id: id })
		.exec()
		.then(result => {
			res.status(200).json({
				message: "Student deleted",
				request: {
					type: "POST",
					url: "http://localhost:3000/students",
					body: { studentId: "ID", subject: "STRING" }
				}
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: err })
		});
});

module.exports = router;