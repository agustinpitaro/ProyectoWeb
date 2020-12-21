import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './producto.entity';
import { Not, Repository } from 'typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';
import { Usuario } from 'src/users/users.entity';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Biblioteca)
        private readonly bibliotecaRepository: Repository<Biblioteca>,
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>
    ) { }


    private async getById(id: number): Promise<Producto> {
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
                    { "nro_producto": Not(productoPrincipal.getNroProducto()), "genero": productoPrincipal.getGenero() },
                    { "nro_producto": Not(productoPrincipal.getNroProducto()), "genero": productoPrincipal.getGeneroSecundario() },
                    { "nro_producto": Not(productoPrincipal.getNroProducto()), "genero_secundario": productoPrincipal.getGenero() },
                    { "nro_producto": Not(productoPrincipal.getNroProducto()), "genero_secundario": productoPrincipal.getGeneroSecundario() },
                ],
                take: 3,
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


    public async votarProducto(voto: any): Promise<boolean> { //ESCRIBIR EN BIBLIOTECA

        let usuario = await this.usuarioRepository.find({
            where : [ {"username": voto.username}]});
        let lineaBiblio = new Biblioteca(voto.producto, usuario[0].nro_usuario, voto.puntaje);
        this.bibliotecaRepository.save(lineaBiblio);
        return true;
    }

    public async getPuntaje(nro_producto: any): Promise<Number> { //LEER DE BIBLIOTECA
        let promedio = 0;
        let validos = 0;
        let productos = await this.bibliotecaRepository.find({
            where: [{
                "nro_producto" : nro_producto
            }]});
        for(let i = 0; i<productos.length; i++){
            if(productos[i].getPuntaje() != -1){
                promedio = promedio + productos[i].getPuntaje();
                validos++;
            }
        }
        return promedio / validos;
    }
}
