import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/users/users.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>
    ) { }


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
}