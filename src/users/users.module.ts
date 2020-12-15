import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario
    ])
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})

export class UsersModule {}