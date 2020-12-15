import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './producto.entity';
import { Not, Repository } from 'typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Biblioteca)
        private readonly bibliotecaRepository: Repository<Biblioteca>,
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>
    ) { }

    public async getAll(): Promise<Producto[]> {
        console.log("Get All productos");
        try {
            const result: Producto[] = await this.productoRepository.find();
            return result;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async getById(id: number): Promise<Producto> {
        console.log("Getting Product id: " + id);
        try {
            let producto: Producto = await this.productoRepository.findOne(id);
            if (producto) {
                return producto;
            } else {
                throw new HttpException('No se pudo encontrar el producto', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            console.log(error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async getProducto(id: any): Promise<Producto[]> {
        let productoAndRelated = [];
        let producto = await this.getById(id);
        productoAndRelated.push(producto);
        productoAndRelated = productoAndRelated.concat(await this.getRelacionados(producto));
        return productoAndRelated;
    }

    private async getRelacionados(producto: Producto): Promise<Producto[]> {
        try {
            let productoPrincipal = await producto;
            let productosRelacionados: Producto[] = await this.productoRepository.find({
                where: [
                    { "nro_producto" : Not(productoPrincipal.getNroProducto()), "genero": productoPrincipal.getGenero()},
                    { "nro_producto" : Not(productoPrincipal.getNroProducto()), "genero": productoPrincipal.getGeneroSecundario()},
                    { "nro_producto" : Not(productoPrincipal.getNroProducto()), "genero_secundario": productoPrincipal.getGenero()},
                    { "nro_producto" : Not(productoPrincipal.getNroProducto()), "genero_secundario": productoPrincipal.getGeneroSecundario()},
                ],
                take : 3,
            });
            if (productosRelacionados) {
                return productosRelacionados;
            } else {
                throw new HttpException('No se pudo encontrar el producto', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            console.log(error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }


    public votarProducto(voto: any): boolean { //ESCRIBIR EN BIBLIOTECA

        let lineaBiblio = new Biblioteca(voto.producto, voto.username, voto.puntaje);
        this.bibliotecaRepository.save(lineaBiblio);
        return true;
    }

    public async getPuntaje(nro_producto: any): Promise<Number> { //LEER DE BIBLIOTECA
        let productos = await this.bibliotecaRepository.find(nro_producto);
        let promedio = 0;
        productos.forEach(p => {
            promedio =+ p.getPuntaje();
        })
        console.log(promedio/productos.length);
        return promedio/productos.length;
    }
}
