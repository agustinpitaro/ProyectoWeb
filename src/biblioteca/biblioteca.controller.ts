import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { Producto } from 'src/producto/producto.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('biblioteca')
export class BibliotecaController {
    constructor(private BibliotecaService: BibliotecaService) { }

    @Get(':id')
    public getProductosSegunUsuario(@Param('id') id): Promise<Producto[]>{
        return this.BibliotecaService.getProductosUser(id);
    }
}
