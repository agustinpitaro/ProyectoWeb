import { Injectable } from '@nestjs/common';
import { Product } from './Product';
import * as fs from 'fs';


@Injectable()
export class ProductoService {
    public getProducto(id: any): Product[] {
        let productoAndRelated = [];
        let product = this.getDatos(id);
        productoAndRelated.push(product);
        productoAndRelated = productoAndRelated.concat(this.getRelacionados(product));
        return productoAndRelated;
    }

    private getRelacionados(producto: Product): Product[] {
        let listaRelacionados = [];
        let cantidad = 0;
        let archivo = fs.readFileSync('resources/productos.csv', 'utf8');
        const elementos = archivo.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));

        for (let i = 0; i < elementos.length && cantidad < 3; i++) {
            let productoBD = new Product(elementos[i][0], elementos[i][1], elementos[i][2], elementos[i][3], elementos[i][4], elementos[i][5]);
            if (productoBD.getGenero() == producto.getGenero() && productoBD.getTitulo() != producto.getTitulo()) {
                listaRelacionados.push(productoBD);
                cantidad++;
            }
        }
        return listaRelacionados;

    }

    private getDatos(id: any): Product {
        let archivo = fs.readFileSync('resources/productos.csv', 'utf8');
        const elementos = archivo.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
        for (let i = 0; i < elementos.length; i++) {
            let producto = new Product(elementos[i][0], elementos[i][1], elementos[i][2], elementos[i][3], elementos[i][4], elementos[i][5]);
            if (producto.getLink() == id) {
                return producto;
            }
        }
    }
}
