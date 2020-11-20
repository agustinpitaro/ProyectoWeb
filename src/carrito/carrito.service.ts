import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class CarritoService {

    public comprarProducto(id:string):boolean{
        
     let biblioteca = fs.readFileSync('resources/biblioteca.csv', 'utf8');
        const elementosB = biblioteca.split('\n')
        .map(p => p.replace('\r', '')).map(p => p.split(','));
        for (let i  = 0; i < elementosB.length; i++){
            if (elementosB[i] = id){
                
            }
        }

}


