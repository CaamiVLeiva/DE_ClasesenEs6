"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var impuestos = new _Impuestos["default"](1000000, 200000);
var cliente = new _Cliente["default"]('Juan Pérez', impuestos);
console.log("El impuesto a pagar por ".concat(cliente.nombre, " es: $").concat(cliente.calcularImpuesto()));