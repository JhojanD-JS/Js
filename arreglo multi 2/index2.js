let arreglo = [
    [ ["%", 7, true, "#"], ["&", 55, false, "="] ],
    [ [false, 0, 99, "?"], [true, 1000, "@", "¡"] ],
    [ [44, 55, 66, 77], [1, 2, 3, 4] ]
  ];

  // recorrido del a
  console.log("Recorrido con for:");
for (let i = 0; i < arreglo.length; i++) {
  for (let j = 0; j < arreglo[i].length; j++) {
    for (let k = 0; k < arreglo[i][j].length; k++) {
      console.log(arreglo[i][j][k]);
    }
  }
}

//recorrido del b 
console.log("Recorrido con forEach:");
arreglo.forEach(function(nivel1) {
  nivel1.forEach(function(nivel2) {
    nivel2.forEach(function(elemento) {
      console.log(elemento);
    });
  });
});
