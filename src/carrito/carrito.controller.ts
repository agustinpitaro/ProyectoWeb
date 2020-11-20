import { Body, Controller, Delete, Post } from '@nestjs/common';
import { userInfo } from 'os';
import { CarritoService} from './carrito.service';

@Controller('carrito')
export class CarritoController {

        constructor(private loginService: CarritoService) { }
    
        @Get()
        public getProducto(): string {
            return this.carritoService.getProducto();
        }

        @Delete()
        public deleteProducto(): boolean {
            return this.carritoService.deleteProducto();
        }

        @Post()
        public comprarProducto():boolean{
            return this.carritoService.comprarProducto();
        }
    
    }
    

