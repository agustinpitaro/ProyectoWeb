import { Body, Controller, Post } from '@nestjs/common';
import { CarritoService} from './carrito.service';

@Controller('carrito')
export class CarritoController {

        constructor(private carritoService: CarritoService) { }
    
        @Post()
        public comprarProducto(@Body() compra: any):boolean{
            return this.carritoService.confirmarCompra(compra);
        }
    }
    

