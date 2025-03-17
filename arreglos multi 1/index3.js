let arreglo = [
    [ [0], [2, 77] ],
    [ ["&", true, "!!"], [[88]] ],
    [ [ [ [1] ] ] ],
    "¿"
  ];
  console.log(arreglo[1][0][1]); // Imprime true
  console.log(arreglo[2][0][0][0]); // Imprime 1
  console.log(arreglo[0][1][1]); // Imprime 77
  console.log(arreglo[1][1][0][0]); // Imprime 88
  console.log(arreglo[3]); // Imprime "¿"
  