import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';
import { Factura } from 'src/factura/factura.entity';
import { CarritoController } from './carrito.controller';
import { CarritoService } from './carrito.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([
      Biblioteca,
      Factura
      ])
    ],
    controllers:[CarritoController],
    providers: [CarritoService]
  })
export class CarritoModule {}
