var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var inputs = input.split("\n");

var line1 = inputs.shift().split(" ");
var line2 = inputs.shift().split(" ");

var [id1, num1, value1] = line1;
var [id2, num2, value2] = line2;

var total = (num1 * value1) + (num2 * value2);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
