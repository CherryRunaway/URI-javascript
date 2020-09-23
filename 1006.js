var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var inputs = input.split("\n");

var a = parseFloat(inputs.shift());
var b = parseFloat(inputs.shift());
var c = parseFloat(inputs.shift());

var media = (a * 2 + b * 3 + c * 5) / 10.00;

console.log("MEDIA = " + media.toFixed(1));
