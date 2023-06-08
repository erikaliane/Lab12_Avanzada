export class Tienda {

    _id?: string;
    departamento: string;
    distrito: string;
    cantidad: Number;

    constructor(departamento:string, distrito:string, cantidad: Number){
        this.departamento = departamento;
        this.distrito = distrito;
        this.cantidad = cantidad;
    }

}