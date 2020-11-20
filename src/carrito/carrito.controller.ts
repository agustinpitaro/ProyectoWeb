import { Body, Controller, Delete } from '@nestjs/common';
import { userInfo } from 'os';
import { CarritoService} from './carrito.service';

@Controller('carrito')
export class CarritoController {

    export class CarritoController {
        constructor(private loginService: CarritoService) { }
    
        @Post('compra')
        public carrito(@Body() userInfo: any):boolean{
            return this.carritoService.carrito(userInfo);
        }
        @Delete('delete')
        public quitar(@Body() userInfo: any):boolean{
            return this.carritoService.carrito(productoInfo);
        }
    
    }
    
}
