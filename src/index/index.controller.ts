import { Controller, Get } from '@nestjs/common';
import { IndexService } from './index.service';
import { Producto } from 'src/producto/producto.entity';
@Controller('index')
export class IndexController {
    constructor(private IndexService: IndexService) { }

    @Get('carousel')
    public getProductosCarousel(): Promise<Producto[]>{
        return this.IndexService.getProductosCarousel();
    }

    @Get('recientes')
    public getProductosRecientes(): Promise<Producto[]>{
        return this.IndexService.getProductosRecientes();
    }

    @Get('populares')
    public getProductosPopulares(): Promise<Producto[]>{
        return this.IndexService.getProductosPopulares();
    }
}
