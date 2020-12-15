import { Biblioteca } from 'src/biblioteca/biblioteca.entity';
import { Factura } from 'src/factura/factura.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USUARIO')
export class Usuario {
    
    @PrimaryGeneratedColumn()
    public nro_usuario: number;


    @Column()
    private username: string;

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string) {
        this.username = username;
    }

    @Column()
    private password: string;

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string) {
        this.password = password;
    }

    public constructor (username?:string, password?:string){
        this.username = username;
        this.password = password;
    }

    public getNroUsuario():number{
        return this.nro_usuario;
    }
    public setNroUsuario(nro_usuario:number){
        this.nro_usuario = nro_usuario;
    }

    @OneToMany((type) => Biblioteca, biblioteca => biblioteca.user)
    public biblioteca: Biblioteca[];

    public getBiblioteca() : Biblioteca[]{
        return this.biblioteca;
    }

    @OneToMany((type) => Factura, factura => factura.user)
    public facturas: Factura[];

    public getFacturas() : Factura[]{
        return this.facturas;
    }
}