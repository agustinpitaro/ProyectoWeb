import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';


@Injectable()
export class LoginService {
    constructor(
        private usersService: UsersService,
        @InjectRepository(Usuario)
        private readonly UsuarioRepository: Repository<Usuario>,
    ) { }

    public async login(userInfo: any): Promise<boolean> {
        let userLogged = new Usuario(userInfo.name, userInfo.password);
        let result = await this.UsuarioRepository.findOne(userLogged);
        if (result)
            return true;
        return false;
    }
}