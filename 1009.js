var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var inputs = input.split("\n");

var the_name = inputs.shift();
var salary = parseFloat(inputs.shift());
var sales = parseFloat(inputs.shift());

var final_salary = (salary + (0.15 * sales));

console.log("TOTAL = R$ " + final_salary.toFixed(2));
