import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoService } from 'src/producto/producto.service';
import { Usuario } from 'src/users/users.entity';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([
        Usuario,
      ])
    ],
    controllers: [RegisterController],
    providers: [RegisterService]
  })
export class RegisterModule {}
