import { Controller, Get, Param } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { Producto } from 'src/producto/producto.entity';

@Controller('biblioteca')
export class BibliotecaController {
    constructor(private BibliotecaService: BibliotecaService) { }

    @Get(':id')
    public getProductosSegunUsuario(@Param('id') id): Promise<Producto[]>{
        return this.BibliotecaService.getProductosUser(id);
    }
}
