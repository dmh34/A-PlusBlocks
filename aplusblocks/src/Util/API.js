import axios from "axios";

export default  {
    AddStudents: function(students){
        axios.post("/api/students",students);
    }
}