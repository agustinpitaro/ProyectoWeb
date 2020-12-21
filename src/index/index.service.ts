import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/producto/producto.entity';
import { getConnection, Repository } from 'typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';
import { UsersService } from 'src/users/users.service';
import { ProductoService } from 'src/producto/producto.service';

@Injectable()
export class IndexService {
    constructor(
        public ProductoService:ProductoService,
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
        @InjectRepository(Biblioteca)
        private readonly bibliotecaRepository: Repository<Biblioteca>
    ) {}

    public async getProductosPopulares(): Promise<Producto[]> {
        let lista = await this.productoRepository.find();
        let listaPuntaje = [];
        for(let i = 0; i < lista.length ; i++){
            listaPuntaje[i] = {
                                nro_producto: lista[i].nro_producto,
                                puntaje: await this.ProductoService.getPuntaje(lista[i].nro_producto)
                            } 
        }
        listaPuntaje = listaPuntaje.sort((obj1, obj2) => {
            if (obj1.puntaje > obj2.puntaje) {
                return -1;
            }
        
            if (obj1.puntaje < obj2.puntaje) {
                return 1;
            }
            return 0;
        });
        let cantidadPopulares = 5;
        let listaFinal: Producto[] = [];
        for(let i = 0 ; i < cantidadPopulares; i++){
            let producto = await this.productoRepository.findOne(listaPuntaje[i].nro_producto);
            listaFinal.push(producto);
        }
        return listaFinal;
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
