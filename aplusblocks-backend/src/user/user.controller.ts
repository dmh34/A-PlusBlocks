import { Controller, Get, Put, Post, Delete, HttpCode, Param, Body, BadRequestException, UseGuards, ParseUUIDPipe, Redirect} from '@nestjs/common';

interface UserDTO{
    
    userName: string,
    passphrase?: string,
    role: string
}


@Controller('user')
export class UserController {

    @Get('profile/:id')
    @HttpCode(200)
    async  getProfile (@Param('id') id:string) :Promise<UserDTO | undefined>{
        
       
        return userService.findbyId(id);

    }

    @Post('signup')
    @HttpCode(204)
    async createUser(@Body() user:UserDTO){
        userService.create(user);
    }

    @Put('profile/:id')
    @HttpCode(202)
    async updateProfile (@Param('id') id:string ) {
        //protected
    
    }

    @Post('login')
    @UseGuards()
    @HttpCode(202)
    async login(@Body() userdto:string){
        //login logic here 
        //protected
    }

    @Delete('profile/:id')
    @UseGuards()
    @HttpCode(204)
    async deleteProfile(@Param('id', new ParseUUIDPipe()) id: string){
        //delete logged in user.
        //protected
    }

}
