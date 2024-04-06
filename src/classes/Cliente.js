export default class Cliente {
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this.impuesto = impuesto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(newNombre){
        let nombreValue = String(newNombre)
        this._nombre = nombreValue;
    }
    //faltaba multiplicar por 21%
    calcularImpuesto(){
        return (`El impuesto total a pagar de ${this._nombre} es: 
        ${(this.impuesto.montoBruto - this.impuesto.deducciones) * 0.21}
        `)
    }
}

/* let darold = new Cliente('Darold', '10')
let jose = new Cliente('jose', '15')

console.log(darold.calcularImpuesto())
console.log(jose.calcularImpuesto())

console.log('jose ahora se llama: ' + (jose.nombre = 2545)) */