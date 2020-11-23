import { Injectable } from '@nestjs/common';
import { Product } from '../producto/Product';
import * as fs from 'fs';

@Injectable()
export class BibliotecaService {
    getProductosUser(id: any): Product[] {
        let biblioteca = fs.readFileSync('resources/biblioteca.csv', 'utf8');
        const elementosB = biblioteca.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
        let productos = fs.readFileSync('resources/productos.csv', 'utf8');
        const elementosP = productos.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
        let nombres = [];
        let listaProductos: Product[] = [];
        for (let i = 0; i < elementosB.length; i++) {
            if(id == elementosB[i][0]){
                nombres.push(elementosB[i][1]);
            }
        }
        for(let j = 0; j < nombres.length; j++){
            for (let i = 0; i < elementosP.length; i++) {
                if(nombres[j] == elementosP[i][3]){
                    let producto = new Product(elementosP[i][0], elementosP[i][1], elementosP[i][2], elementosP[i][3], elementosP[i][4], elementosP[i][5],elementosP[i][6]);
                    listaProductos.push(producto);
                    break;
                }
            }
        }
        return listaProductos;
    }
}
