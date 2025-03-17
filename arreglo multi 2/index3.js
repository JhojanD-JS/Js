let arreglo = [
    [2, 8, 9],
    [30, 71, 77],
    [11, 990, 41]
  ];
  
  // a) Recorrer todos los elementos y mostrar los números impares
  console.log("Números impares:");
  arreglo.forEach(function(subarreglo) {
    subarreglo.forEach(function(numero) {
      if (numero % 2 !== 0) {
        console.log(numero);
      }
    });
  });
  
  // b) Recorrer todos los elementos y mostrar la suma total
  let sumaTotal = 0;
  arreglo.forEach(function(subarreglo) {
    subarreglo.forEach(function(numero) {
      sumaTotal += numero;
    });
  });
  console.log("La suma total de los números es:", sumaTotal);
  