var input = require('fs').readFileSync("stdin", "utf8");

var inputs = input.split(" ");

var a = parseInt(inputs.shift());
var b = parseInt(inputs.shift());
var c = parseInt(inputs.shift());

var maiorAB = (a + b + Math.abs(a - b)) / 2;
var maiorXC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(maiorXC + " eh o maior");
