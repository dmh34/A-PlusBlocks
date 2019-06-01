import axios from "axios";
import xlsx from "../Util/xlsxparse";

export default {
    getTeachers: function () {
        return axios.get("/teachers");
    },

    getTeacher: function (id) {
        return axios.get("/teachers/" + id);
    },

    createTeacher: function (data) {
        return axios.post("/teachers", data);
    },

    updateTeacher: function (id, data) {
        return axios.patch("/teachers/" + id, data);
    },

    removeTeacher: function (id) {
        return axios.delete("/teachers/" + id);
    },

    getStudents: async function () {
        let students = await axios.get("/students/")
        return students.data;
    },

    getStudent: function (id) {
        return axios.get("/students/" + id);
    },

    createStudent: function (data) {
        return axios.post("/students", data);
    },

    updateStudent: function (id, data) {
        return axios.patch("/students/" + id, data);
    },

    importStudents: function (data) {

        return axios.post("/students", data);
    }



}