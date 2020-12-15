import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/users/users.entity';

@Injectable()
export class RegisterService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>
    ) { }

    public async register(userInfo: any): Promise<boolean> {
        let userRegister = new Usuario(userInfo.name, userInfo.password );
        if (await this.usuarioRepository.findOne(userInfo.name)) {
            return false;
        }
        this.usuarioRepository.save(userRegister);
        return true;
    }

}
