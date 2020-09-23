var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var raio = parseFloat(input);
var pi = 3.14159

var a = pi * (raio * raio);
//var a = pi * Math.pow(raio, 2);

console.log("A=" + a.toFixed(4));
