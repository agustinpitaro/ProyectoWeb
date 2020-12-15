import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CarritoService } from './carrito/carrito.service';
import { CarritoController } from './carrito/carrito.controller';
import { CatalogoController } from './catalogo/catalogo.controller';
import { CatalogoService } from './catalogo/catalogo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { AuthModule } from './auth/auth.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { FacturaModule } from './factura/factura.module';
import { DetalleFacturaModule } from './detalle-factura/detalle-factura.module';
import { RegisterModule } from './register/register.module';
import { IndexModule } from './index/index.module';

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
    RegisterModule,
    IndexModule,
  ],
  controllers: [AppController, CarritoController, CatalogoController],
  providers: [AppService, CarritoService, CatalogoService],
})
export class AppModule { }