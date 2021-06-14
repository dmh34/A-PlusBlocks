const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quizSchema = newSchema([{
    _id: mongoose.Schema.Types.ObjectId,

    quizName: {
        type: String, required: true
    },
    questions: [{
        type: Schema.Types.ObjectId, ref: 'Quiz'
    }],
    owner: {
        type: Schema.Types.ObjectId, ref: 'Teacher'
    }


}])