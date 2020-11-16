import {Body, Controller, Post } from '@nestjs/common';
import {RegisterService} from './register.service';

@Controller('register')
export class RegisterController {
    constructor (private registerService: RegisterService){}

    @Post('singup')
    public register(@Body() userInfo: any):boolean{
    return this.registerService.register(userInfo);

}
}
