import axios from "axios";

export default {
    AddStudents: function (students) {
        console.log(students);
        axios.post("/api/students", students)

    },

    getStudents: function () {
        return axios.get("/api/students");
    }
}