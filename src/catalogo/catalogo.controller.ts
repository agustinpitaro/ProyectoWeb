import { Controller, Get } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { Product } from '../producto';

@Controller('catalogo')
export class CatalogoController {
    constructor(private CatalogoService: CatalogoService) { }

    @Get()
    public getProductosSegunUsuario(): Product[]{
        return this.CatalogoService.getProductos();
    }
}
