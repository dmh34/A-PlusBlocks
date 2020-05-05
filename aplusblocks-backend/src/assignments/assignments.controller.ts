import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    @Get()
    async getAssignments(){

    }

    @Post('create')
    async createAssignment(){

    }

    @Delete('create/:id')
    async removeAssignment(){

    }
}
