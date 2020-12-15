import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './users.entity';
import { Not, Repository } from 'typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';
export type User = any;

@Injectable()
export class UsersService {
    private users;
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) {
        this.load();
    }
    private async load() {
        this.users = await this.usuarioRepository.find();
    }
    public async findOne(username: string): Promise<User | undefined> {
        console.log("findone");
        return this.users.find(user => user.getUsername() === username);
    }  
    public async getUsuarios(): Promise<Usuario[]> {
        console.log("Get All clientes");
        try {
            const result= await this.usuarioRepository.find({
                relations: ["facturas"]
            });
            return result;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async getByUsername(id: number): Promise<Usuario> {
        try {
            const user = await this.usuarioRepository.findOne({where:[{"username" : id}]});
            return user;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }


}