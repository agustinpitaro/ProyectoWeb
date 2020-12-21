import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';
import { Producto } from 'src/producto/producto.entity';
import { ProductoService } from 'src/producto/producto.service';
import { Usuario } from 'src/users/users.entity';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([
        Producto,
        Biblioteca,
        Usuario
      ])],
    providers: [IndexService, ProductoService],
    controllers: [IndexController]
  })
export class IndexModule {}
