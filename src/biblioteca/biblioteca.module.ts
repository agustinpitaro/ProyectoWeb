import {Biblioteca} from './biblioteca.entity';
import { Module } from '@nestjs/common';
import { BibliotecaController } from './biblioteca.controller';
import { BibliotecaService } from './biblioteca.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
    Biblioteca
    ])
  ],
  controllers:[BibliotecaController],
  providers: [BibliotecaService]
})
export class BibliotecaModule {}