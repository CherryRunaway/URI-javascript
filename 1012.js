var input = require('fs').readFileSync("stdin", "utf8");

var inputs = input.split(" ");
var pi = 3.14159;

var a = parseFloat(inputs.shift());
var b = parseFloat(inputs.shift());
var c = parseFloat(inputs.shift());

var triangulo = (a * c) / 2.0;
var circulo = pi * (c * c);
var trapezio = ((a + b) * c) / 2.0;
var quadrado = b * b;
var retangulo = a * b;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));
