import { Body, Controller, Delete, Post } from '@nestjs/common';
import { userInfo } from 'os';
import { CarritoService} from './carrito.service';

@Controller('carrito')
export class CarritoController {

        constructor(private carritoService: CarritoService) { }
    
        @Post()
        public comprarProducto():string{
            return this.carritoService.comprarProducto();
        }
    
    }
    

