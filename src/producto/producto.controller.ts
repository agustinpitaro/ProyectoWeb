import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Producto } from './producto.entity';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private productoService: ProductoService) { }

    @Get(':id')
    public getProduct(@Param('id') id): Promise<Producto[]>{
        return this.productoService.getProducto(id);
    }
    @Get('/:nro_producto/puntaje')
    public getPuntaje(@Param('nro_producto') nro_producto): Promise<Number>{
        return this.productoService.getPuntaje(nro_producto);
    }
    @Post()
    public votarProducto(@Body() voto: any):boolean{
        return this.productoService.votarProducto(voto);
    }
}
