const db = require("../models");
const mongoose = require("mongoose");
const e = require("express");


module.exports = {
    addStudents: async function (req, res) {
        if (req.isAuthenticated()) {
            let teacher = await db.Teacher.findById(req.body.teacher)

            if (!teacher) {
                return res.status(404).json({
                    message: "Teacher not found"
                })
            }

            const student = new db.Students({
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
        } else {
            res.status(400).json({ message: "User is not logged in" });
        }

        return res.status(201);
    },

    // .then(result => {
    //     console.log(result);
    //     res.status(201).json({
    //         message: 'Student created',
    //         createdStudent: {
    //             _id: result._id,
    //             firstName: result.firstName,
    //             lastName: result.lastName,
    //             teacher: result.teacher,
    //             gradeYear: result.gradeYear
    //         },
    //         request: {
    //             type: 'GET',
    //             url: 'http://localhost:3000/students/' + result._id
    //         }
    //     });
    //     Teacher.findOneAndUpdate({ _id: result.teacher }, { $push: { students: result._id } },
    //         function (error, success) {
    //             if (error) {
    //                 console.log(error);
    //             } else {
    //                 console.log(success);
    //             }
    //         });
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json({
    //         error: err
    //     });
    // });


    addStudent: function (req, res) {
        if (req.isAuthenticated()) {
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
        } else {
            res.status(400).json({ message: "User not logged in" });
        }
    },

    getAllStudents: async function (req, res) {
        if (req.isAuthenticated()) {
            let students = await db.Students.find()
                .select('firstName lastName gradeYear teacher classes _id')
                .populate('classes', 'subject teacher grade')
                .exec();

            return res.json(students);
        } else {
            res.status(400).json({ message: "User is not logged in" })
        }
        // .then(docs => {
        //     res.json({
        //         count: docs.length,
        //         students: docs.map(doc => {
        //             return {
        //                 _id: doc._id,
        //                 firstName: doc.firstName,
        //                 lastName: doc.lastName,
        //                 teacher: doc.teacher,
        //                 classes: doc.classes,
        //                 gradeYear: doc.gradeYear
        //                 // request: {
        //                 //     type: 'GET',
        //                 //     url: 'http://localhost:3000/students/' + doc._id
        //                 // }
        //             }
        //         })
        //     });
        // })
        // .catch(err => {
        //     res.status(500).json(err)
        // });

    },

    findStudentById: function (req, res) {
        const id = req.params.studentId;
        db.Students.findById(id)
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

    updateStudents: function (req, res) {
        if (req.isAuthenticated()) {
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
        } else {
            res.status(400).json({ message: "User is not logged in" })
        }
    },

    findAllStudentClasses: function (req, res) {
        if (req.isAuthenticated()) {
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
        } else {
            res.status(400).json({ message: "User not logged in" })
        }
    },

    removeStudent: function (req, res) {
        if (req.isAuthenticated()) {
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
        } else {
            res.status(400).json({ message: "User is not logged in" })
        }





    }
}