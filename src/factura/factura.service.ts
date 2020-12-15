import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { Factura } from './factura.entity';

@Injectable()
export class FacturaService{

    constructor(
        @InjectRepository(Factura) private readonly facturaRepository: Repository<Factura>,
        @InjectRepository(Usuario) private readonly clienteRepository: Repository<Usuario>
        ){}

     public async getAll(): Promise<Factura[]>{
        try {
            const result: Factura[] = await this.facturaRepository.find({
                relations: ["cliente"]
            });
            //const detalle_factura = await this.facturaRepository.find({ relations: ["producto"] });

            return result;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }

    async getByFactura(facturaId: number): Promise<U> {
        let response: Cliente = await this.clienteRepository.findOne({
            where: [{
                "nro_cliente": Equal(facturaId)
            }]
        })
        return response
    }
}