import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CarritoService } from './carrito/carrito.service';
import { CarritoController } from './carrito/carrito.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),   // <-- path to the static files
    }),
  ],
  controllers: [AppController, CarritoController],
  providers: [AppService, CarritoService],
})
export class AppModule {}