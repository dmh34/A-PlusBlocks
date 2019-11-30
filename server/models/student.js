const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema([{
    firstName: {
        type: String, required: true
    },
    lastName: {
        type: String, required: true
    },
    gradeYear: {
        type: Number, required: true
    },
    teacher: {
        type: Schema.Types.ObjectId, ref: 'Teacher', required: true
    },
    classes: [{
        type: Schema.Types.ObjectId, ref: 'Classes'
    }],
    quizGrades: [{
        type: Array, default: []
    }]
}]);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
