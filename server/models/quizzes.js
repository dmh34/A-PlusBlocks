const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema([{
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


}]);

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;

