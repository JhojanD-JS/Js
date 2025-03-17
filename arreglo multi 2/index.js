let arreglo = [
    ["a", "z", "t"],
    [789, 887, 451],
    [true, false, 0]
  ];
  
  // a) Recorrer con ciclos for anidados
  console.log("Recorrido con for:");
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo[i].length; j++) {
      console.log(arreglo[i][j]);
    }
  }
  
  // b) Recorrer con forEach
  console.log("Recorrido con forEach:");
  arreglo.forEach(function(subarreglo) {
    subarreglo.forEach(function(elemento) {
      console.log(elemento);
    });
  });
  