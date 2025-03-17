let n = parseInt(prompt("Ingrese un número entero positivo:"));


if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese un número entero positivo válido.");
} else {
  let suma = 0;
  
  for (let i = 1; i <= n; i++) {
    suma += i * i;
  }
  
  alert("La suma de los cuadrados de los números del 1 al " + n + " es: " + suma);
}
