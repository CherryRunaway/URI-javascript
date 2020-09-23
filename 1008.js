var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var inputs = input.split("\n");

var number = parseInt(inputs.shift());
var hours = parseInt(inputs.shift());
var value = parseFloat(inputs.shift());

var salary = (hours * value);

console.log("NUMBER = " + number);
console.log("SALARY = U$ " + salary.toFixed(2));
