import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { Producto } from './producto.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class ProductoService {
    constructor(
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
    //TYPEORM GET by id
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
        console.log(productoAndRelated);
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
        let linea = "\n" + voto.username + "," + voto.producto + "," + voto.puntaje;
        console.log(linea);
        return true;
    }

    public getPuntaje(nro_producto: any): Number { //LEER DE BIBLIOTECA
        let contador = 0;
        let salida = 0;
        let biblioteca = fs.readFileSync('resources/biblioteca.csv', 'utf8');
        const elementosB = biblioteca.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
        for (let i = 0; i < elementosB.length; i++) {
            if (nro_producto == elementosB[i][1] && elementosB[i][2] != "-1") {
                salida += parseInt(elementosB[i][2]);
                contador++;
            }
        }
        return salida / contador;
    }
}
