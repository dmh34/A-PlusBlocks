import { Controller, Get, Param } from '@nestjs/common';

@Controller('students')
export class StudentsController {

    @Get()
    async getStudent(@Param() dto:string){

    }

    @Get('admin')
    async getAllStudents(){

    }

    @Get('grades')
    async getGrades(){

    }
    

    
}
