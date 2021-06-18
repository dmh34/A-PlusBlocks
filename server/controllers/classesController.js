const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        if (req.isAuthenticated()) {
        db.Classes.find()
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
        }else{
            res.status(400).json({message: "User is not logged in"})
        }
    },

    create: function (req, res) {
        if (req.isAuthenticated()) {
        db.Teacher.findById(req.body.teacher)
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
                db.Teacher.findOneAndUpdate({ _id: result.teacher }, { $push: { classes: result._id } },
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
        }else{
            res.status(400).json({message: "User not logged in"})
        }
    },

    findById: function (req, res) {
        if (req.isAuthenticated()) {
        const id = req.params.classesId;
        db.Classes.findById(id)
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
        }else{
            res.status(400).json({message: "User not logged in"})
        }
    },

    addStudentToClass: function (req, res) {
        if (req.isAuthenticated()) {
        const id = req.params.classesId;
        const studentId = req.body.studentId;

        db.Classes.findOneAndUpdate({ _id: id }, { $push: { students: studentId } })
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
        }else{
            res.status(400).json({message: "User not logged in"})
        }
    },

    update: function (req, res) {
        if (req.isAuthenticated()) {
        const id = req.params.classesId;
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        }
        db.Classes.findOneAndUpdate({ _id: id }, { $set: updateOps })
            .exec()
            .then(result => {
                console.log(result);
                res.status(500).json(result);
            });
        }else{
            res.status(400).json({message: "User not loggeg in "})
        }
    },

    delete: function (req, res) {
        if (req.isAuthenticated()) {
        const id = req.params.classesId;
        db.Classes.remove({ _id: id })
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
        }else{
            res.status(400).json({message: "User not logged in "})
        }
    }


}