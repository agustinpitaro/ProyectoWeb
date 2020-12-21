import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/users/users.entity';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';

@Injectable()
export class RegisterService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) { }

    public async register(userInfo: any): Promise<boolean> {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;     
        if (await this.usuarioRepository.find({
            where : [ {"username": userInfo.username}]})) {
            return false;
        }
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(userInfo.password, salt);
        let userRegister = new Usuario(userInfo.name, hash);
        console.log(userRegister);
        this.usuarioRepository.save(userRegister);
        return true;
    }
}
