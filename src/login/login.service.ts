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
        private readonly usuarioRepository: Repository<Usuario>,
    ) { }

    public async login(userInfo: any): Promise<boolean> {
        const bcrypt = require('bcrypt');
        let usuario = await this.usuarioRepository.find({
            where : [ {"username": userInfo.name}]});
        if (usuario)
            return bcrypt.compareSync(userInfo.password, usuario[0].getPassword());
        return false;
    }
}