export class Product{
    id:string;
    private imagen: string;
    link: string;
    titulo: string;
    private precio: string;
    private sinopsis: string;
    genero: string;


    constructor(id:string, titulo: string, sinopsis: string, imagen: string, link: string, precio: string, genero:string){
        this.id = id;
        this.imagen=imagen;
        this.link=link;
        this.titulo = titulo;
        this.precio = precio;
        this.sinopsis = sinopsis;
        this.genero = genero;
    }

    public getImagen(): string{
        return this.imagen;
    }

    public getGenero(): string{
        return this.genero;
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
