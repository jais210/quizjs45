// Ejercicio 1: Calcule el máximo número
function numeroMaximo(n1, n2, n3) {
  var n1 = 1;
  var n2 = 3;
  var n3 = 2;
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}
console.log(numeroMaximo());

function numeroMinimo(n1, n2, n3) {
  var n1 = 1;
  var n2 = 3;
  var n3 = 2;
  if (n1 < n2 && n1 < n3) {
    return n1;
  } else if (n2 < n1 && n2 < n3) {
    return n2;
  } else {
    return n3;
  }
}
console.log(numeroMinimo());
// Ejercicio 2 :Dado un arreglo imprimir los índices par e impar


// Ejercicio 3: invertir un arreglo

function inversion(array) {
  array = [1, 2, 3, 4];
  return array.reverse();
}
console.log(inversion());

// Ejercicio 4: Dibuja
