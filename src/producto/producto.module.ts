import { Producto } from './producto.entity';
import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Producto,
      Biblioteca
    ])
  ],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}