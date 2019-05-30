const db = require("../models");
const mongoose = require("mongoose");

let studentList;


module.exports = {
    addStudents: function (req, res) {

        Teacher.findById(req.body.teacher)
            .then(teacher => {
                if (!teacher) {
                    return res.status(404).json({
                        message: "Teacher not found"
                    });
                }
                const student = new Student({
                    _id: mongoose.Types.ObjectId(),
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    teacher: req.body.teacher,
                    gradeYear: req.body.gradeYear
                });
                return student.save();
            })
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Student created',
                    createdStudent: {
                        _id: result._id,
                        firstName: result.firstName,
                        lastName: result.lastName,
                        teacher: result.teacher,
                        gradeYear: result.gradeYear
                    },
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/students/' + result._id
                    }
                });
                Teacher.findOneAndUpdate({ _id: result.teacher }, { $push: { students: result._id } },
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
                res.status(500).json({
                    error: err
                });
            });
    },

    getAllStudents: function (req, res) {
        Student.find()
            .select('firstName lastName gradeYear teacher classes _id')
            .populate('classes', 'subject teacher grade')
            .exec()
            .then(docs => {
                res.status(200).json({
                    count: docs.length,
                    students: docs.map(doc => {
                        return {
                            _id: doc._id,
                            firstName: doc.firstName,
                            lastName: doc.lastName,
                            teacher: doc.teacher,
                            classes: doc.classes,
                            gradeYear: doc.gradeYear,
                            request: {
                                type: 'GET',
                                url: 'http://localhost:3000/students/' + doc._id
                            }
                        }
                    })
                });
            })
            .catch(err => {
                res.status(500).json(err)
            });

    }


}