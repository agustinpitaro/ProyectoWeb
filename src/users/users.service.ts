import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './users.entity';
import { Not, Repository } from 'typeorm';
export type User = any;
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
    
    //tendria que guardar ese get all en un objeto users para buscarlo y no se me ocurre
    
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}
