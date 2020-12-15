import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/producto/producto.entity';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([
        Producto
      ])],
    providers: [IndexService],
    controllers: [IndexController]
  })
export class IndexModule {}
