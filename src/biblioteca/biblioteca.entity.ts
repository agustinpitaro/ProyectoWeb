import { Producto } from 'src/producto/producto.entity';
import { Usuario } from 'src/users/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('BIBLIOTECA')
export class Biblioteca {
    @PrimaryGeneratedColumn()
    @ManyToOne(() => Producto, producto => producto.getNroProducto())
    private producto : Producto;

    @PrimaryGeneratedColumn()
    @ManyToOne(() => Usuario, user => user.getNroUsuario())
    private usuario : Usuario;

    @Column()
    private puntaje: number;



    public getPuntaje(): number {
        return this.puntaje;
    }

    public setPuntaje(puntaje: number) {
        this.puntaje = puntaje;
    }

    public constructor (puntaje?:number){
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