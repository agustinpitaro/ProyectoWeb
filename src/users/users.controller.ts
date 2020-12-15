import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    public constructor(
        private readonly UsersService: UsersService) { }

    @Post("get-all")
    public getUsuarios(): Promise<Usuario[]>{
        return this.UsersService.getUsuarios();
    }

    @Get(":id")
    public getByUsername(@Param("id") id): Promise<Usuario>{
        return this.UsersService.getByUsername(id);
    }
}
