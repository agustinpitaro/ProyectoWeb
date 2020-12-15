import { Producto } from 'src/producto/producto.entity';
import { Factura } from 'src/factura/factura.entity';
import { Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DETALLE_FACTURA')
export class DetalleFactura {

    @PrimaryColumn()
    public nro_factura:number;

    @ManyToOne(() => Factura, factura => factura.nro_factura)
    private factura : Factura;

    @PrimaryGeneratedColumn()
    public nro_item: number;

    @PrimaryColumn()
    public nro_producto : number;

    @ManyToOne(() => Producto, producto => producto.nro_producto)
    private producto : Producto;

   

    public getNroItem():number{
        return this.nro_item;
    }
    
    public setNroItem(nro_item: number){
        this.nro_item = nro_item;
    }

    public getNroProducto():number{
        return this.nro_producto;
    }
    
    public setNroProducto(nro_producto: number){
        this.nro_producto = nro_producto;
    }

    public getNroFactura():number{
        return this.nro_factura;
    }
    
    public setNroFactura(nro_factura: number){
        this.nro_factura = nro_factura;
    }
}