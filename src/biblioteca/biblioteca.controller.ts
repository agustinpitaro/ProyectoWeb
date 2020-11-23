import { Controller, Get, Param } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { Product } from '../producto/Product';

@Controller('biblioteca')
export class BibliotecaController {
    constructor(private BibliotecaService: BibliotecaService) { }

    @Get(':id')
    public getProductosSegunUsuario(@Param('id') id): Product[]{
        return this.BibliotecaService.getProductosUser(id);
    }
}
