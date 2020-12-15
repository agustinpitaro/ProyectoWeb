import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';
import { Factura } from 'src/factura/factura.entity';
import { Producto } from 'src/producto/producto.entity';
import { UsersController } from 'src/users/users.controller';
import { Usuario } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { CarritoController } from './carrito.controller';
import { CarritoService } from './carrito.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([
      Factura,
      Producto,
      Usuario
      ])
    ],
    controllers:[CarritoController, UsersController],
    providers: [CarritoService, UsersService]
  })
export class CarritoModule {}
