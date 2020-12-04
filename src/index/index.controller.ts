import { Controller, Get } from '@nestjs/common';
import { IndexService } from './index.service';
import { Product } from '../producto';
@Controller('index')
export class IndexController {
    constructor(private IndexService: IndexService) { }

    @Get('carousel')
    public getProductosCarousel(): Product[]{
        return this.IndexService.getProductosCarousel();//proximamente va a ser otra funcion mas especifica xd
    }

    @Get('recientes')
    public getProductosRecientes(): Product[]{
        return this.IndexService.getProductosRecientes();//proximamente va a ser otra funcion mas especifica xd
    }

    @Get('populares')
    public getProductosPopulares(): Product[]{
        return this.IndexService.getProductosPopulares();//proximamente va a ser otra funcion mas especifica xd
    }
}
