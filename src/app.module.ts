import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CarritoService } from './carrito/carrito.service';
import { CarritoController } from './carrito/carrito.controller';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './producto/producto.service';
import { IndexController } from './index/index.controller';
import { IndexService } from './index/index.service';
import { BibliotecaController } from './biblioteca/biblioteca.controller';
import { BibliotecaService } from './biblioteca/biblioteca.service';
import { CatalogoController } from './catalogo/catalogo.controller';
import { CatalogoService } from './catalogo/catalogo.service';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { ProductoModule } from './producto/producto.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { CarritoModule } from './carrito/carrito.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { LoginModule } from './login/login.module';
import { IndexModule } from './index/index.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProductoModule,
    BibliotecaModule,
    CarritoModule,
    CatalogoModule,
    LoginModule,
    IndexModule,
  ],
  controllers: [AppController, IndexController, ProductoController,CarritoController, BibliotecaController, CatalogoController, RegisterController, LoginController],
  providers: [AppService, CarritoService, ProductoService, IndexService, BibliotecaService, CatalogoService, RegisterService, LoginService],
})
export class AppModule {}