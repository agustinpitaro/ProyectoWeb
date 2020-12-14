import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class CarritoService {

    public confirmarCompra(compra: any): boolean {
        for (let i in compra.compra) {
            let linea = "\n"+ compra.username + "," +  compra.compra[i] + "," + "-1";
            fs.appendFileSync("resources/biblioteca.csv", linea);
        }
        return true;
    }
}


