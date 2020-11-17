export class Product{
    private imagen: string;
    private link: string;
    private titulo: string;
    private precio: string;
    private sinopsis: string;


    constructor(titulo: string, sinopsis: string, imagen: string, link: string, precio: string){
        this.imagen=imagen;
        this.link=link;
        this.titulo = titulo;
        this.precio = precio;
        this.sinopsis = sinopsis;
    }

    public getImagen(): string{
        return this.imagen;
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
