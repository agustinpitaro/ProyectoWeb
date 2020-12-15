import { Biblioteca } from 'src/biblioteca/biblioteca.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PRODUCTO')
export class Producto {

    @PrimaryGeneratedColumn()
    private nro_producto: number;

    @Column()
    private titulo: string;

    @OneToMany(() => Biblioteca, biblioteca => biblioteca.getNroProducto())
    biblioteca: Biblioteca[];

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
    private genero_secundario: string;

    public getGeneroSecundario(): string {
        return this.genero_secundario;
    }

    public setGeneroSecundario(genero_secundario: string): void {
        this.genero_secundario = genero_secundario;
    }
    @Column()
    private link: string;

    public getLink(): string {
        return this.link;
    }

    public setLink(link: string): void {
        this.link = link;
    }

    public constructor(titulo?:string, sinopsis?:string, imagen?:string, precio?:number, genero?:string, genero_secundario?:string, link?:string){
        this.titulo = titulo;
        this.sinopsis = sinopsis;
        this.imagen = imagen;
        this.precio = precio;
        this.genero = genero;
        this.genero_secundario = genero_secundario;
        this.link = link;
    }

    public getNroProducto():number{
        return this.nro_producto;
    }
    
    public setNroProducto(nro_producto: number){
        this.nro_producto = nro_producto;
    }

}  