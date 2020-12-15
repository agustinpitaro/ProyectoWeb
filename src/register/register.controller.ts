import {Body, Controller, Get, Post } from '@nestjs/common';
import {RegisterService} from './register.service';

@Controller('register')
export class RegisterController {
    constructor (private registerService: RegisterService){}

    @Post('singup')
    public register(@Body() userInfo: any):Promise<boolean>{
    return this.registerService.register(userInfo);

}
}
