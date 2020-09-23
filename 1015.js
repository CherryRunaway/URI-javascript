var inputs = input.split("\n");

var line1 = inputs.shift().split(" ").map(item => parseFloat(item));
var line2 = inputs.shift().split(" ").map(item => parseFloat(item));

var [x1, y1] = line1;
var [x2, y2] = line2;

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

//var X = Math.pow(x2 - x1, 2);
//var Y = Math.pow(y2 - y1, 2);
//var distancia = Math.sqrt(X+Y);

console.log(distancia.toFixed(4));
