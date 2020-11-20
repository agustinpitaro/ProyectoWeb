export class Producto{
    private name: string;
    private id: string;
    private price: Number;
    private stock: Number ;
    private description: string;
    

    constructor(name: string, password: string){
        this.id= id;
        this.name=name;
        this.stock= stock;
        this.price = price;
        this.description = description;
    }
    public getID():string{
        return this.id;
    }

    public getName(): string{
        return this.name;
    }
    public getStock(): Number{
        return this.stock;
    }
    public getPrice(): Number{
        return this.price;
    }
    public getDescription(): string{
        return this.description;
    }
}