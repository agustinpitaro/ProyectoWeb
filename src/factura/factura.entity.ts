import { Producto } from 'src/producto/producto.entity';
import { Usuario } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FACTURA')
export class Factura {

    @Column()
    private nro_usuario: number;

    @ManyToOne((type) => Usuario, user => user.facturas)
    @JoinColumn({ name: 'nro_factura' })
    public user: Usuario;

    @PrimaryGeneratedColumn()
    public nro_factura: number;

    @Column()
    public nro_producto: number;

    public getNro_producto(): number{
        return this.nro_producto;
    }

    @ManyToOne(() => Producto, producto => producto.nro_producto)
    @JoinColumn({ name: 'nro_factura' })
    public producto: Producto;

    @Column()
    private fecha: string;

    public getFecha(): string {
        return this.fecha;
    }

    public setFecha(fecha: string) {
        this.fecha = fecha;
    }

    @Column()
    private total_sin_iva: number;

    public getTotalSinIva(): number {
        return this.total_sin_iva;
    }

    public setTotalSinIva(total_sin_iva: number) {
        this.total_sin_iva = total_sin_iva;
    }

    @Column()
    private iva: number;

    public getIva(): number {
        return this.iva;
    }

    public setIva(iva: number) {
        this.iva = iva;
    }

    @Column()
    private total_con_iva: number;

    public getTotalConIva(): number {
        return this.total_con_iva;
    }

    public setTotalConIva(total_con_iva: number) {
        this.total_con_iva = total_con_iva;
    }

    public constructor(nro_usuario?: number, nro_producto?:number, fecha?: string, total_sin_iva?: number, iva?: number, total_con_iva?: number) {
        this.nro_producto = nro_producto;
        this.nro_usuario = nro_usuario;
        this.fecha = fecha;
        this.total_sin_iva = total_sin_iva;
        this.iva = iva;
        this.total_con_iva = total_con_iva;
    }

    public getNroUsuario(): number {
        return this.nro_usuario;
    }
    public setNroUsuario(nro_usuario: number) {
        this.nro_usuario = nro_usuario;
    }

    public getNroFactura(): number {
        return this.nro_factura;
    }
    public setNroFactura(nro_factura: number) {
        this.nro_factura = nro_factura;
    }
}