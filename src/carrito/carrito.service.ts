import { Injectable } from '@nestjs/common';
import { Producto} from './Producto';
import * as fs from 'fs';

@Injectable()
export class CarritoService {

    public deleteProducto(productoID: string):boolean{
        //recibe el array y elimina por id
    }
    public getProducto(): Array[Producto]{
        //trae el arreglo de productos
     
   
    }
    public comprarProducto():boolean{
        //manda el arreglo de productos a biblioteca
    }

}


