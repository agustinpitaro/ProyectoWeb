export class FacturaDTO {
    readonly fecha :DateConstructor;
    readonly total_sin_iva : number;
    readonly iva: number;
    readonly total_con_iva: number;
 }