import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BibliotecaController } from './biblioteca/biblioteca.controller';
import { BibliotecaService } from './biblioteca/biblioteca.service';
import { CatalogoController } from './catalogo/catalogo.controller';
import { CatalogoService } from './catalogo/catalogo.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),   // <-- path to the static files
    }),
  ],
  controllers: [AppController, BibliotecaController, CatalogoController],
  providers: [AppService, BibliotecaService, CatalogoService],
})
export class AppModule {}