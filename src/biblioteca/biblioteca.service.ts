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

    public async getProductosUser(id: any): Promise<Producto[]> {
        let salida;
        try {
            let usuario = await this.usuarioRepository.find({ where : [ {"username":id} ]});
            let busqueda: Biblioteca[] = await this.bibliotecaRepository.find({
                where: [
                    { "nro_usuario" : usuario[0].getNroUsuario()},
                ],
            });
            busqueda.forEach(idProducto => {
                let producto = this.productoRepository.findOne(idProducto.getNroProducto());
                salida.push(producto);
            });
            console.log(salida);
            return salida;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }
}
