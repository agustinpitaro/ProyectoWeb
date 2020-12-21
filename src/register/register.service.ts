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
        let usuarioExistente = await this.usuarioRepository.find({
            where : [ {"username": userInfo.name}]})[9];

        if (usuarioExistente) {
            return false;
        }
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(userInfo.password, salt);
        let userRegister = new Usuario(userInfo.name, hash);
        this.usuarioRepository.save(userRegister);
        return true;
    }
}
