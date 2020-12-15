import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    public constructor(
        private readonly UsersService: UsersService) { }

    @Post("get-all")
    public getUsuarios(@Body() token ): Promise<Usuario[]>{
        return this.UsersService.getUsuarios(token);
    }

    @Get(":id")
    public getByCliente(@Param("id") id): Promise<any[]>{
        return this.UsersService.getByCliente(id);
    }
}
