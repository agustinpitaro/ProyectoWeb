import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/users/users.controller';
import { Usuario } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { FacturaController } from './factura.controller';
import { Factura } from './factura.entity';
import { FacturaService } from './factura.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Factura,
      Usuario
    ])
  ],
  controllers: [UsersController, FacturaController],
  providers: [UsersService, FacturaService]
})
export class FacturaModule {}
