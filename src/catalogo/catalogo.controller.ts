import { Controller, Get } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { Producto } from 'src/producto/producto.entity';

@Controller('catalogo')
export class CatalogoController {
    constructor(private CatalogoService: CatalogoService) { }

    @Get()
    public getProductosSegunUsuario(): Promise<Producto[]>{
        return this.CatalogoService.getProductos();
    }
}
