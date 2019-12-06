import axios from "axios";
//import xlsx from "../spreadsheet";

export default {
    getTeachers: async function () {
        return axios.get("/teachers");
    },

    getTeacher: async function (id:any) {
        return axios.get("/teachers/" + id);
    },

    createTeacher: function (data:any) {
        return axios.post("/teachers", data);
    },

    updateTeacher: function (id:any, data:any) {
        return axios.patch("/teachers/" + id, data);
    },

    removeTeacher: function (id:any) {
        return axios.delete("/teachers/" + id);
    },

    getStudents: async function () {
        let students = await axios.get("/students/")
        return students.data;
    },

    getStudent: async function (id:any) {
        return axios.get("/students/" + id);
    },

    createStudent: function (data:any) {
        return axios.post("/students", data);
    },

    updateStudent: function (id:any, data:any) {
        return axios.patch("/students/" + id, data);
    },

    importStudents: function (data:any) {

        return axios.post("/students", data);
    }


}