import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/producto/producto.entity';
import { getConnection, Repository } from 'typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';

@Injectable()
export class IndexService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>
    ) { }

    public async getProductosPopulares(): Promise<Producto[]> {
        
        let lista = await getConnection()
        .createQueryBuilder()
        .select("nro_producto, AVG(puntaje)")
        .from(Biblioteca, "tuplas").orderBy("AVG(puntaje)", "DESC")
        .limit(5).getMany();
        let listafinal : Producto[];
        lista.forEach(async p => {
            let producto = await this.productoRepository.findOne(p.getNroProducto());
            listafinal.push(producto);
        });
        return listafinal;
    }
    public async getProductosCarousel(): Promise<Producto[]> {

        let carousel = await this.productoRepository.find({take : 3});
        return carousel;
    }
    public async getProductosRecientes(): Promise<Producto[]> {
        let recientes = await this.productoRepository.find({take : 5});
        return recientes;
    }
}
