import { Producto } from './producto.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, LessThanOrEqual, LessThan, MoreThanOrEqual } from 'typeorm';

@Injectable()
export class ProductoService {

    constructor(
        @InjectRepository(Producto) 
        private readonly productoRepository: Repository<Producto>
    ){}
    public async getAll(): Promise<Producto[]>{
        console.log("Get All productos");
        try {
            //Get all
            //const result: Producto[] = await this.productoRepository.find();

            //Select * from e01_producto where (codigo_producto > 100 AND precio <= 200) OR (codigo_producto < 20 AND precio >= 200)
            const result: Producto[] = await this.productoRepository.find({
                where:[
                    {"nro_producto": MoreThan(100), "precio": LessThanOrEqual(200)},
                    {"nro_producto": LessThan(20), "precio": MoreThanOrEqual(200)}
                ]
            });
            return result

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }

    //TYPEORM GET by id
    public async getById(id: number): Promise<Producto>{
        console.log("Getting Product id: " + id);
        try {
            const producto: Producto = await this.productoRepository.findOne(id);
            if(producto){
                return producto;
            }else{
                throw new HttpException('No se pudo encontrar el producto', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            console.log(error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }
}