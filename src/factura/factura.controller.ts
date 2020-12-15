import { Controller, Get, Param } from '@nestjs/common';
import { Usuario } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { Factura } from './factura.entity';
import { FacturaService } from './factura.service';

@Controller('factura')
export class FacturaController {
    public constructor(private readonly facturaService: FacturaService,
        private UsersService: UsersService) { }

    @Get("get-all")
    public getAllfacturasRaw(): Promise<Factura[]> {
        return this.facturaService.getAll();
    }

    @Get("get-cliente/:facturaId")
    public getByFactura(@Param("facturaId") facturaId: number): Promise<Usuario>{
        return this.facturaService.getByFactura(facturaId);
    }
    
}
