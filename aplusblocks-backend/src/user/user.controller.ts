import { Controller, Get, Put, Post, Delete, HttpCode, Param, Body, BadRequestException } from '@nestjs/common';

interface UserDTO{
    userName: string,
    passphrase: string,
    role: string
}


@Controller('user')
export class UserController {

    @Get('profile/:id')
    @HttpCode(200)
    async  getProfile (@Param('id') id:string) :Promise<string>{
        userServive.findOne(d)
       if(id === ''){
           throw new BadRequestException();
       }
       return "id-2";

    }

    @Put('profile/:id')
    @HttpCode(202)
    async updateProfile (@Param('id') id:string ) {
        
    }

    @Post('profile')
    @HttpCode(204)
    async createProfile(@Body() userdto:string){

    }

    @Delete('profile/:id')
    @HttpCode(204)
    async deleteProfile(@Param('id') id: string){

    }

}
