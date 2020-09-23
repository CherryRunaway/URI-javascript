var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var inputs = input.split("\n");

var a = parseInt(inputs.shift());
var b = parseInt(inputs.shift());

var x = a + b;

console.log("X = " + x);
