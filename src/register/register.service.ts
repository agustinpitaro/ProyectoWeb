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
        let userRegister;
       
        if (await this.usuarioRepository.findOne(userInfo.name)) {
            return false;
        }
         bcrypt.hash(userInfo.password, saltRounds, function(err, hash) {
            let asdas = super. guardarRepo( userRegister);
             userRegister = new Usuario(userInfo.name, hash );
             console.log(userRegister);
            });
           
           
        return true;
    }
    public async guardarRepo(user: Usuario):boolean{
        this.usuarioRepository.save(user);
        return true;
    }


}
