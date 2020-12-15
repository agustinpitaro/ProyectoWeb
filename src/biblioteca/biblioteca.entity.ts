import { Producto } from 'src/producto/producto.entity';
import { Usuario } from 'src/users/users.entity';
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('BIBLIOTECA')
export class Biblioteca {
    @PrimaryColumn()
    private nro_producto : number;

    @PrimaryColumn()
    private nro_usuario : number;

    @ManyToOne(() => Usuario, user => user.getNroUsuario())
    private usuario : Usuario;

    @ManyToOne(() => Producto, producto => producto.getNroProducto())
    private producto : Producto;

    @Column()
    private puntaje: number;

    public getPuntaje(): number {
        return this.puntaje;
    }

    public setPuntaje(puntaje: number) {
        this.puntaje = puntaje;
    }

    public constructor (nro_producto?:number, nro_usuario?:number,puntaje?:number){
        this.nro_producto = nro_producto;
        this.nro_usuario = nro_usuario;
        this.puntaje = puntaje;
    }

    public getNroProducto():number{
        return this.producto.getNroProducto();
    }
    
    public setNroProducto(nro_producto: number){
        this.producto.setNroProducto(nro_producto);
    }
    public getNroUsuario():number{
        return this.usuario.getNroUsuario();
    }
    public setNroUsuario(nro_usuario:number){
        this.usuario.setNroUsuario(nro_usuario);
    }
}