import { Body, Request, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService) { }

    @Post('validate')
    public login(@Body() userInfo: any):Promise<boolean>{
        return this.loginService.login(userInfo);
    }
} 
  
