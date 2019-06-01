import axios from "axios";

export default {
    getTeachers: function(){
        return axios.get("/teacher");           
    },

    getTeacher: function(id){
        return axios.get("/teacher/" + id);
    },

    createTeacher: function(data){
        return axios.post("/teacher",data);
    },

    updateTeacher: function(id,data){
        return axios.patch("/teacher/"+id,data);
    },

    removeTeacher: function(id){
        return axios.delete("/teacher/"+id);
    },

    getStudents: function(){
        return axios.get("/students");
    },

    getStudent: function(id){
        return axios.get("/students/"+id);
    },

    createStudent: function(data){
        return axios.post("/students", data);
    },

    updateStudent: function(id,data){
        return axios.patch("/students/"+id,data);
    }



}