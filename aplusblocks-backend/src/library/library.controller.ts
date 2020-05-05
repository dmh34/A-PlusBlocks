import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('library')
export class LibraryController {
    @Get()
    async getAvailiable(){

    }

    @Post()
    async saveActivity(@Param('id') id: string){
        
    }
}
