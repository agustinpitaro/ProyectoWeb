import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './users.entity';
import { Not, Repository } from 'typeorm';
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
        return this.users.find(user => user.getUsername() === username);
    }


    public async getUsuarios(token): Promise<Usuario[]> {
        console.log("Get All clientes");

        if (!token.token) {
            throw new HttpException({
                status: HttpStatus.UNAUTHORIZED,
            }, HttpStatus.UNAUTHORIZED);
        }

        try {
            const result = await this.usuarioRepository.find();
            return result

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async getByCliente(id: number): Promise<any> {
        try {

            const user = await this.usuarioRepository.findOne(id);
            return user;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }


}