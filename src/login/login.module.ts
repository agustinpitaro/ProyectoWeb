import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { AuthGuard } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario
    ]),
    AuthModule],
  providers: [LoginService],
  controllers: [LoginController]
})
export class LoginModule {}