import { Producto } from 'src/producto/producto.entity';
import { Usuario } from 'src/users/users.entity';
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('BIBLIOTECA')
export class Biblioteca {
    @PrimaryColumn()
    public nro_producto : number;

    @PrimaryColumn()
    public nro_usuario : number;

    @ManyToOne(() => Usuario, user => user.nro_usuario)
    public user : Usuario;

    @ManyToOne(() => Producto, producto => producto.nro_producto)
    public producto : Producto;

    @Column()
    private puntaje: number;

    public getPuntaje(): number {
        return this.puntaje;
    }

    public setPuntaje(puntaje: number) {
        this.puntaje = puntaje;
    }

    public constructor (nro_producto?:number, nro_usuario?:number,puntaje?:number, producto?:Producto, user?:Usuario){
        this.nro_producto = nro_producto;
        this.nro_usuario = nro_usuario;
        this.puntaje = puntaje;
        this.producto = producto;
        this.user = user;
    }

    public getNroProducto():number{
        return this.nro_producto;
    }
    
    public setNroProducto(nro_producto: number){
        this.nro_producto = nro_producto;
    }
    public getNroUsuario():number{
        return this.nro_usuario;
    }
    public setNroUsuario(nro_usuario:number){
        this.nro_usuario = nro_usuario;
    }
}