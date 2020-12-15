import { Body, Controller, Post , UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CarritoService} from './carrito.service';

@Controller('carrito')
export class CarritoController {

        constructor(private carritoService: CarritoService) { }
        @Post()
        public async comprarProducto(@Body() compra: any):Promise<boolean>{
            return await this.carritoService.confirmarCompra(compra);
        }
    }
    

