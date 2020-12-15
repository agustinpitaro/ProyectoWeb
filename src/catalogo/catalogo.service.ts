import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/producto/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogoService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>
    ) { }
    public async getProductos(): Promise<Producto[]> {
        let recientes = await this.productoRepository.find();
        return recientes;
    }
}
