import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/producto/producto.entity';
import { Not, Repository } from 'typeorm';
import { Usuario } from 'src/users/users.entity';

@Injectable()
export class FacturaService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>
    ) { }


    public GenerateFactura() {

    }
    public getTotalSINiva(){

    }
    public getIva(){

    }

    public getTotalCONiva(){

    }

    public getCurrentDate(){
        let today = new Date();
        let currentdate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        return currentdate;
    }


}
