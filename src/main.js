import Cliente from "./classes/Cliente.js";
import Impuesto from "./classes/Impuesto.js";

let impuestoDarold = new Impuesto(1500, 500);
let impuestoJose = new Impuesto(2500, 500);

let darold = new Cliente('Darold', impuestoDarold)
let jose = new Cliente('jose', impuestoJose)

console.log(darold.calcularImpuesto())
console.log(jose.calcularImpuesto())
