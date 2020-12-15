import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biblioteca } from 'src/biblioteca/biblioteca.entity';
import { Producto } from 'src/producto/producto.entity';
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
    providers: [IndexService],
    controllers: [IndexController]
  })
export class IndexModule {}
