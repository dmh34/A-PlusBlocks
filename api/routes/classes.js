const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Classes = require('../../models/classes');
const Teacher = require('../../models/teacher');
const Student = require('../../models/student');

router.get('/', (req, res, next) => {
	Classes.find()
		.select('teacher subject grade _id students')
		.populate('teacher', 'firstName lastName')
		.populate('students', 'firstName lastName')
		.exec()
		.then(docs => {
			res.status(200).json({
				count: docs.length,
				classes: docs.map(doc => {
					return {
						_id: doc._id,
						teacher: doc.teacher,
						subject: doc.subject,
						grade: doc.grade,
						students: doc.students,
						request: {
							type: 'GET',
							url: 'http://localhost:3000/classes/' + doc._id
						}
					}
				})

			});

		})
		.catch(err => {
			res.status(500).json(err)
		});
});

router.post('/', (req, res, next) => {
	Teacher.findById(req.body.teacher)
		.then(teacher => {
			if (!teacher) {
				return res.status(404).json({
					message: "Teacher not found"
				});
			}
			const classes = new Classes({
				_id: mongoose.Types.ObjectId(),
				teacher: req.body.teacher,
				grade: req.body.grade,
				subject: req.body.subject
			});
			return classes.save();
		})
		.then(result => {
			console.log(result);
			res.status(201).json({
				message: 'Class created',
				createdClass: {
					_id: result._id,
					teacherId: result.teacherId,
					subject: result.subject,
					grade: result.grade
				},
				request: {
					type: 'GET',
					url: 'http://localhost:3000/classes/' + result._id
				}
			});
			Teacher.findOneAndUpdate({ _id: result.teacher }, { $push: { classes: result._id } },
				function (error, success) {
					if (error) {
						console.log(error);
					} else {
						console.log(success);
					}
				})
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

router.get('/:classesId', (req, res, next) => {
	const id = req.params.classesId;
	Classes.findById(id)
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
// for editing values NOT adding students


router.patch('/:classesId', (req, res, next) => {
	const id = req.params.classesId;
	const updateOps = {};
	for (const ops of req.body) {
		updateOps[ops.propName] = ops.value;
	}
	Classes.findOneAndUpdate({ _id: id }, { $set: updateOps })
		.exec()
		.then(result => {
			console.log(result);
			res.status(500).json(result);
		});
		
});

// PATCH /addstudent/:classesId req.body looks something like: 
// {"studentId": "5cecef0c6bfac03c4455dcd6"}
// for adding students via NOT changing values

router.patch('/addstudent/:classesId', (req, res, next) => {
	const id = req.params.classesId;
	const studentId = req.body.studentId;
	
	Classes.findOneAndUpdate({ _id: id }, { $push: {students: studentId} })
	.then(result => {
		console.log(result);
		res.status(500).json(result);		
	})
	.catch(err => {
		console.log(err);
		res.status(503).json({
			error: err
		});
	});
});

router.delete('/:classesId', (req, res, next) => {
	const id = req.params.classesId;
	Classes.remove({ _id: id })
		.exec()
		.then(result => {
			res.status(200).json({
				message: "Class deleted",
				request: {
					type: "POST",
					url: "http://localhost:3000/classes",
					body: { classesId: "ID", subject: "STRING" }
				}
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: err })
		});
});

module.exports = router;