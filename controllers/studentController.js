//const db = require("./models");

let studentList = [{
    name: "Jim Bob",
    grade: "A",
    notes: "He sucks"
},{
    name: "Jim Bob",
    grade: "A",
    notes: "He sucks"
}
]


module.exports = {
    addStudents: function(req, res){
        console.log("students added");
        console.log(req.body);
        studentList = req.body;
    },

    getAllStudents: function(req, res){
        res.json(studentList);
    }


}