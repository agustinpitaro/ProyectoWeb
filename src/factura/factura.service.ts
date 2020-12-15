import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/users/users.entity';
import { Equal, Repository } from 'typeorm';
import { Factura } from './factura.entity';

@Injectable()
export class FacturaService{

    constructor(
        @InjectRepository(Factura) private readonly facturaRepository: Repository<Factura>,
        @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>
        ){}

     public async getAll(): Promise<Factura[]>{
        try {
            const result: Factura[] = await this.facturaRepository.find({
                relations: ["user"]
            });
            return result;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }

    async getByFactura(facturaId: number): Promise<Usuario> {
        let response: Usuario = await this.usuarioRepository.findOne({
            where: [{
                "nro_usuario": Equal(facturaId)
            }]
        })
        return response
    }
}
