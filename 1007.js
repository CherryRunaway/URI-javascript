var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var inputs = input.split("\n");

var a = parseInt(inputs.shift());
var b = parseInt(inputs.shift());
var c = parseInt(inputs.shift());
var d = parseInt(inputs.shift());

var diferenca = (a * b - c * d);

console.log("DIFERENCA = " + diferenca);
