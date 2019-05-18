//const db = require("./models");

let studentList;


module.exports = {
    addStudents: function (req, res) {
        console.log("students added");
        console.log(req.body);
        studentList = req.body;
    },

    getAllStudents: function (req, res) {
        res.json(studentList);
    }


}