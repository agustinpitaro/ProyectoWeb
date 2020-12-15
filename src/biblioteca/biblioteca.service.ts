import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/producto/producto.entity';
import { Repository } from 'typeorm';
import { Biblioteca } from './biblioteca.entity';

@Injectable()
export class BibliotecaService {
    constructor(
        @InjectRepository(Biblioteca)
        private readonly bibliotecaRepository: Repository<Biblioteca>,
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    ) { }

    public async getProductosUser(id: any): Promise<Producto[]> {
        console.log("Get All productos de User");
        try {
            let salida: Producto[];
            let busqueda: Biblioteca[] = await this.bibliotecaRepository.find({
                where: [
                    { "nro_usuario" : id},
                ],
            });
            busqueda.forEach(async idProducto => {
                let producto = await this.productoRepository.findOne(idProducto.getNroProducto());
                salida.push(producto);
            });

            return salida;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }
}
