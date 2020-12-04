export class Product{
    private nro_producto: number;
    private titulo: string;
    private sinopsis: string;
    private imagen: string;
    private precio: string;
    private genero: string;
    private genero_secundario: string;
    private link: string;

    constructor(nro_producto: number, titulo: string, sinopsis: string, imagen: string, precio: string, genero:string, genero_secundario:string, link: string){
        this.nro_producto = nro_producto;
        this.titulo = titulo;
        this.sinopsis = sinopsis;
        this.imagen=imagen;
        this.precio = precio;
        this.genero = genero;
        this.genero_secundario = genero_secundario;
        this.link=link;        
    }
    public getNroProducto(): number{
        return this.nro_producto;
    }


    public getImagen(): string{
        return this.imagen;
    }

    public getGenero(): string{
        return this.genero;
    }

    public getGeneroSecundario(): string{
        return this.genero_secundario;
    }

    public getLink(): string{
        return this.link;
    }
    public getTitulo(): string{
        return this.titulo;
    }
    public getPrecio(): string{
        return this.precio;
    }
    public getSinopsis(): string{
        return this.sinopsis;
    }

}