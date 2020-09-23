var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var inputs = input.split("\n");

var a = parseFloat(inputs.shift());
var b = parseFloat(inputs.shift());

var media = (a * 3.5 + b * 7.5) / 11.00;

console.log("MEDIA = " + media.toFixed(5));
