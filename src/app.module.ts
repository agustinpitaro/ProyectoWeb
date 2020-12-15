import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { AuthModule } from './auth/auth.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { FacturaModule } from './factura/factura.module';
import { RegisterModule } from './register/register.module';
import { IndexModule } from './index/index.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { CarritoModule } from './carrito/carrito.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),   // <-- path to the static files
    }),
    TypeOrmModule.forRoot(),
    ProductoModule,
    AuthModule,
    BibliotecaModule,
    LoginModule,
    UsersModule,
    FacturaModule,
    RegisterModule,
    IndexModule,
    CatalogoModule,
    CarritoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }