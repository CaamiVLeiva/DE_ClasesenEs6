import Cliente from './Cliente.js';
import Impuestos from './Impuestos.js';

const impuestos = new Impuestos(1000000, 200000);
const cliente = new Cliente('Juan Pérez', impuestos);

console.log(`El impuesto a pagar por ${cliente.nombre} es: $${cliente.calcularImpuesto()}`);
