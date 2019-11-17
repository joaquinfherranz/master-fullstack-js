// 1 - Diseña un algoritmo que lea dos números y realice los siguientes cálculos:

// Valor de su suma
// Valor de su resta
// Valor de su division
// Valor de su producto

function suma (a, b) {
  return a+b;
}

function resta (a, b) {
  return a-b;
}

function divide (a, b) {
  return a/b;
}

function multiplica (a, b) {
  return a*b;
}

var a = Number(prompt('Introduzca un numero:'));
var b = Number(prompt('Introduzca otro numero:'));

console.log(`La suma es ${suma(a,b)}`);
console.log(`La diferencia es ${resta(a,b)}`);
console.log(`La division es ${divide(a,b)}`);
console.log(`El producto es ${multiplica(a,b)}`);