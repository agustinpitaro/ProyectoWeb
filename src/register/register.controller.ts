import {Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../user';
import {RegisterService} from './register.service';

@Controller('register')
export class RegisterController {
    constructor (private registerService: RegisterService){}

    @Post('singup')
    public register(@Body() userInfo: any):boolean{
    return this.registerService.register(userInfo);

}
}
