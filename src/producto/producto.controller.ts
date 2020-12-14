import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from '../producto';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private productoService: ProductoService) { }

    @Get(':id')
    public getProduct(@Param('id') id): Product[]{
        return this.productoService.getProducto(id);
    }
    @Get('/:nro_producto/puntaje')
    public getPuntaje(@Param('nro_producto') nro_producto): Number{
        return this.productoService.getPuntaje(nro_producto);
    }
    @Post()
    public votarProducto(@Body() voto: any):boolean{
        return this.productoService.votarProducto(voto);
    }
}
