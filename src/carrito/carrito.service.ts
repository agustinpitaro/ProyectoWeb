import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';
import { Factura } from 'src/factura/factura.entity';
import { Producto } from 'src/producto/producto.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class CarritoService {
    constructor(
        private usersService: UsersService,
        @InjectRepository(Factura)
        private readonly FacturaRepository: Repository<Factura>,
        @InjectRepository(Biblioteca)
        private readonly BibliotecaRepository: Repository<Biblioteca>,
        @InjectRepository(Producto)
        private readonly ProductoRepository: Repository<Producto>,
    ) { }

    public async confirmarCompra(compra: any): Promise<boolean> {
        let usuario = await this.usersService.getByUsername(compra.username);
        for (let i in compra.compra) {
            let producto = await this.ProductoRepository.findOne(compra.compra[i]);
            let linea = new Factura(usuario.getNroUsuario(), producto.getNroProducto(), "15/12/2020",
                producto.getPrecio(), producto.getPrecio() * 0.21, producto.getPrecio() * 1.21);
            console.log(linea);
            let propiedad = new Biblioteca(producto.getNroProducto(),usuario.getNroUsuario(),-1);
            console.log(propiedad);
            this.FacturaRepository.save(linea);
            this.BibliotecaRepository.save(propiedad);
        }
        return true;
    }
}


