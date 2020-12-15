export class FacturaDTO {
    readonly nro_usuario : number;
    readonly fecha :string;
    readonly total_sin_iva : number;
    readonly iva: number;
    readonly total_con_iva: number;
 }