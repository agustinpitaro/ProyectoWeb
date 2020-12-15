import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/users/users.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LoginService {
    constructor() { }

    public checkLogin(userLogged){

        console.log(userLogged);
        let result = this.userService.findOne(userLogged.getUsername());
        
        if (result) {
            return "token123";
        }else{
            throw new HttpException({status: HttpStatus.NOT_FOUND,}, HttpStatus.NOT_FOUND);
        }

    }

    /*
    public async login(userInfo: any): Promise<boolean> {
        let userRegister = new Usuario(userInfo.name, userInfo.password);
        if (await this.usuarioRepository.find({
            where: [
                { "username": userInfo.name, "password": userInfo.password },
            ]
        })) {
            return true;
        }
        return false;
    }
    */
}