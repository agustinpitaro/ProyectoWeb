import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from './Product';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private productoService: ProductoService) { }

    @Get(':id')
    public getProduct(@Param('id') id): Product {
        return this.productoService.getProducto(id);
    }
}
