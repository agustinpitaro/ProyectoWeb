import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './users.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>
    ) { }

    public async getAll(): Promise<Usuario[]> {
        console.log("Get All usuarios");
        try {
            const result: Usuario[] = await this.usuarioRepository.find();
            return result;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }
}
