import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/producto/producto.entity';
import { Usuario } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { Biblioteca } from './biblioteca.entity';

@Injectable()
export class BibliotecaService {
    constructor(
        @InjectRepository(Biblioteca)
        private readonly bibliotecaRepository: Repository<Biblioteca>,
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) { }

    private async getFullProductos(biblioteca): Promise<Producto[]> {
        let salida : Producto[] = [];
        for(let i = 0; i<biblioteca.length; i++){
            let producto = await this.productoRepository.findOne(biblioteca[i].getNroProducto());
            salida.push(producto);
        }
        return salida;
    }

    public async getProductosUser(name: any): Promise<Producto[]> {
        try {
            let usuario = await this.usuarioRepository.find({ where: [{ "username": name }] });
            let busqueda: Biblioteca[] = await this.bibliotecaRepository.find({
                where: [
                    { "nro_usuario": usuario[0].getNroUsuario() },
                ],
            });
            let salida = await this.getFullProductos(busqueda);
            return salida;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }
}
