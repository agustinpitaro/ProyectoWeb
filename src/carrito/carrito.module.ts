import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';
import { DetalleFactura } from 'src/detalle-factura/detalle-factura.entity';
import { Factura } from 'src/factura/factura.entity';
import { CarritoController } from './carrito.controller';
import { CarritoService } from './carrito.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([
      Biblioteca,
      Factura,
      DetalleFactura
      ])
    ],
    controllers:[CarritoController],
    providers: [CarritoService]
  })
export class CarritoModule {}
