import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CarritoService } from './carrito/carrito.service';
import { CarritoController } from './carrito/carrito.controller';
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
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),   // <-- path to the static files
    }),
    TypeOrmModule.forRoot(),
    ProductoModule,
  ],
  controllers: [AppController, IndexController, CarritoController, BibliotecaController, CatalogoController, RegisterController, LoginController],
  providers: [AppService, CarritoService, IndexService, BibliotecaService, CatalogoService, RegisterService, LoginService],
})
export class AppModule { }