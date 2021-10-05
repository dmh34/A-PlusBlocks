import { Student } from "./student";

export class Assingment {
    id?: string;
    type: ASSINGMENT_TYPE;
    path: string;
    createdBy: string;
    create_date: Date;
    rating: number;
}

enum ASSINGMENT_TYPE{
    QUIZ,
    INTERACTIVE,
    TEST,
    
}

class InstrucitonClass{
    id?: string;
    instructer: Teacher;
    students: Student[];
}

class Video {
    id?: string;
    owner: Teacher;
    path: string;
    rating: number;
    isprivate: boolean;
}

class Teacher{
    id?: string;
    classes: InstrucitonClass[];

}

class Quiz{
    id?:string;
    author: Teacher;
    
}