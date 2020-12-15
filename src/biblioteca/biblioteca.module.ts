import {Biblioteca} from './biblioteca.entity';
import {Usuario} from '../users/users.entity';
import { Module } from '@nestjs/common';
import { BibliotecaController } from './biblioteca.controller';
import { BibliotecaService } from './biblioteca.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/producto/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
    Biblioteca,
    Producto,
    Usuario
    ])
  ],
  controllers:[BibliotecaController],
  providers: [BibliotecaService]
})
export class BibliotecaModule {}