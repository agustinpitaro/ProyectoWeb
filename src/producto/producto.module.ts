import { Producto } from './producto.entity';
import {Usuario} from '../users/users.entity';
import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Biblioteca,
      Producto,
      Usuario
    ])
  ],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}