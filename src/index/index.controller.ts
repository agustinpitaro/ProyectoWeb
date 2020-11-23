import { Controller, Get } from '@nestjs/common';
import { IndexService } from './index.service';
import { Product } from '../producto/producto';
@Controller('index')
export class IndexController {
    constructor(private IndexService: IndexService) { }

    @Get('carousel')
    public getProductosCarousel(): Product[]{
        return this.IndexService.getProductos();//proximamente va a ser otra funcion mas especifica xd
    }

    @Get('recientes')
    public getProductosRecientes(): Product[]{
        return this.IndexService.getProductos();//proximamente va a ser otra funcion mas especifica xd
    }

    @Get('populares')
    public getProductosPopulares(): Product[]{
        return this.IndexService.getProductos();//proximamente va a ser otra funcion mas especifica xd
    }
}
