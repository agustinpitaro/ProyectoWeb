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

    public async getUsuarios(): Promise<Usuario[]> {
        
        let todoslosusuarios = await this.usuarioRepository.find();
        return todoslosusuarios;
    }


/*
private readonly users = this.usuarioRepository.find();
  async findOne(username: string): Promise<User | undefined> {
      let usuariobuscado = this.getUsuarios();
    return this.usuariobuscado.find(user => user.username === username);
  }*/
}