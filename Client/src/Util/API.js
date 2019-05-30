import axios from "axios";

export default {
    AddStudents: function (students, accToken) {
        console.log(accToken);
        //console.log(students);


        axios({
            method: "Post",
            data: students,
            url: '/api/students',
            headers: {
                authorization: `Bearer ${accToken}`
            }
        });

    },

    getStudents: function (accToken) {
        console.log(accToken);
        return axios({
            method: "get",
            url: '/api/students',
            headers: {
                authorization: `Bearer ${accToken}`
            }
        });
    },

    getTeacher: function (accToken) {
        return axios({
            method: "get",
            url: "/api/teacher",
            headers: {
                authorization: `Bearer ${accToken}`
            }
        })
    }
}