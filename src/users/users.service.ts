import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './users.entity';
import { Not, Repository } from 'typeorm';
export type User = any;
@Injectable()
export class UsersService {

}
