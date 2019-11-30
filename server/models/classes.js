const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const classesSchema = new Schema({

    subject: {
        type: String, required: true
    },
    grade: {
        type: Number
    },
    teacher: {
        type: Schema.Types.ObjectId, ref: 'Teacher', required: true
    },
    students: [{
        type: Schema.Types.ObjectId, ref: 'Student'
    }]
});

const Classes = mongoose.model('Classes', classesSchema);

module.exports = Classes;