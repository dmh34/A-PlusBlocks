const db = require("../models");
const mongoose = require("mongoose");


module.exports = {
    addStudents: async function (req, res) {
        try {
            let teacher = await db.Teacher.findById(req.body.teacher)

            if (!teacher) {
                return res.status(404).json({
                    message: "Teacher not found"
                })
            }

            const student = await new db.Students({
                _id: mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                teacher: req.body.teacher,
                gradeYear: req.body.gradeYear
            });
            student.save();

            await db.Teacher.findByIdAndUpdate({ _id: student.teacher }, { $push: { students: student._id } }, function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                }
            });
        } catch (err) {
            res.json(err);
        }

        return res.status(201);
    },

    addStudent: function (req, res) {
        db.teacher.findById(req.body.teacher)
            .then(teacher => {
                if (!teacher) {
                    return res.status(404).json({
                        message: "Teacher not found"
                    })
                }

                db.Students.collection.insert(req.body, (err) => {
                    res.status(400).json({
                        error: err
                    })
                })
            })
    },

    getAllStudents: async function (req, res) {
        let students = await db.Students.find()
            .select('firstName lastName gradeYear teacher classes _id')
            .populate('classes', 'subject teacher grade')
            .exec();

        return res.json(students);


    },

    findStudentById: async function (req, res) {
        const id = req.params.studentId;
        let student = await db.Students.findById(id)
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
    },

    updateStudents: async function (req, res) {

        const id = req.params.studentId;
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        }
        db.Student.update({ _id: id }, { $set: updateOps })
            .exec()
            .then(result => {
                console.log(result);
                res.status(500).json(result);
            });
    },

    findAllStudentClasses:async function (req, res) {
        db.Classes.find({ students: req.params.studentId })
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
                db.Student.findOneAndUpdate({ _id: req.params.studentId }, { $set: { classes: classList } },
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
    },

                    async unction (req, res) {
        const id = req.params.studentId;
        db.Student.remove({ _id: id })
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
    }





}