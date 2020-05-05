export class Assingment {
    id?: string;
    type: ASSINGMENT_TYPE;
    path: string;
    createdBy: string;
    create_date: Date;
    stars: number;
}

enum ASSINGMENT_TYPE{
    QUIZ,
    INTERACTIVE,
    TEST,
    
}
