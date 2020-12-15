import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/producto/producto.entity';
import { CatalogoController } from './catalogo.controller';
import { CatalogoService } from './catalogo.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([
      Producto,
      ])
    ],
    controllers:[CatalogoController],
    providers: [CatalogoService]
  })
export class CatalogoModule {}
