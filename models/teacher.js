const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const teacherSchema = new Schema([{
    _id: mongoose.Schema.Types.ObjectId,
    
    firstName: {
        type: String, required: true
    },
    lastName: {
        type: String, required: true
    }
}]);

module.exports = mongoose.model("Teacher", teacherSchema);
