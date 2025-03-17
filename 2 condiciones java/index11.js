let suma = 0;
let contador = 0;
let numero;

do {
  
  numero = parseFloat(prompt("Ingrese un número (0 para terminar):"));

  
  if (!isNaN(numero)) {
    if (numero !== 0) {
      suma += numero;
      contador++;
    }
  } else {
    alert("Por favor, ingrese un número válido.");
  }
} while (numero !== 0);

if (contador > 0) {
  const promedio = suma / contador;
  alert("El promedio de los números ingresados es: " + promedio);
} else {
  alert("No se ingresaron números válidos.");
}
