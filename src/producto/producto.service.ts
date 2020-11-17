import { Injectable } from '@nestjs/common';
import { Product } from './Product';
import * as fs from 'fs';


@Injectable()
export class ProductoService {
    public getProducto(id: any): Product {
        let selectedProduct = this.getDatos(id);
        console.log(selectedProduct);
        return selectedProduct;
    }

    private getDatos(id: any): Product {
        let archivo = fs.readFileSync('resources/productos.csv', 'utf8');
        const elementos = archivo.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
        for (let i = 0; i < elementos.length; i++) {
            let producto = new Product(elementos[i][0], elementos[i][1], elementos[i][2], elementos[i][3], elementos[i][4]);
            if (producto.getLink() == id) {
                return producto;
            }
        }
    }
}
