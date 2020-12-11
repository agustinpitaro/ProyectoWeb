import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PRODUCTO')
export class Producto {

    @PrimaryGeneratedColumn()
    private nro_producto: number;

    @Column()
    private titulo: string;

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string) {
        this.titulo = titulo;
    }
   
    @Column()
    private sinopsis: string;

    public getSinopsis(): string {
        return this.sinopsis;
    }

    public setSinopsis(sinopsis: string): void {
        this.sinopsis = sinopsis;
    }

   
    @Column()
    private imagen: string;
   

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    @Column()
    private precio: number;

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    @Column()
    private genero: string;

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }
    @Column()
    private genero_secun: string;

    public getGeneroSecun(): string {
        return this.genero_secun;
    }

    public setGeneroSecun(genero_secun: string): void {
        this.genero_secun = genero_secun;
    }
    @Column()
    private link: string;

    public getLink(): string {
        return this.link;
    }

    public setLink(link: string): void {
        this.link = link;
    }

    public constructor(titulo?:string, sinopsis?:string, imagen?:string, precio?:number, genero?:string, genero_secun?:string, link?:string){
        this.titulo = titulo;
        this.sinopsis = sinopsis;
        this.imagen = imagen;
        this.precio = precio;
        this.genero = genero;
        this.genero_secun = genero_secun;
        this.link = link;
    }

    public getNroProducto():number{
        return this.nro_producto;
    }
    
    public setNroProducto(nro_producto: number){
        this.nro_producto = nro_producto;
    }

}  