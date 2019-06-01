const db = require("../models");


module.exports = {
    addStudents: function (req, res) {

        db.Teacher.findById(req.body.teacher)
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
        db.Student.find()
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

    },

    findStudentById: function (req, res) {
        const id = req.params.studentId;
        db.Student.findById(id)
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

    findAllStudentClasses: function (req, res) {
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

    removeStudent: function (req, res) {
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