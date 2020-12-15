import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CarritoService } from './carrito/carrito.service';
import { CarritoController } from './carrito/carrito.controller';
import { IndexController } from './index/index.controller';
import { IndexService } from './index/index.service';
import { CatalogoController } from './catalogo/catalogo.controller';
import { CatalogoService } from './catalogo/catalogo.service';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { AuthModule } from './auth/auth.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { FacturaModule } from './factura/factura.module';
import { DetalleFacturaModule } from './detalle-factura/detalle-factura.module';

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
    DetalleFacturaModule,
  ],
  controllers: [AppController, IndexController, CarritoController, CatalogoController, RegisterController, LoginController],
  providers: [AppService, CarritoService, IndexService, CatalogoService, RegisterService, LoginService],
})
export class AppModule { }