import { Body, Controller, Post , UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CarritoService} from './carrito.service';

@Controller('carrito')
export class CarritoController {

        constructor(private carritoService: CarritoService) { }
        @UseGuards(JwtAuthGuard)
        @Post()
        public comprarProducto(@Body() compra: any):boolean{
            return this.carritoService.confirmarCompra(compra);
        }
    }
    

