
let arreglo = [
    [50, 60, 70],
    ["q", "%", "$"],
    ["?", ">", "<"],
    [1, -8, -2]
  ];
  
  
  arreglo[1][1] = "?";
  console.log("a) Se cambió '%' por '?':", arreglo[1][1]);  
  
  arreglo[3][1] = 9;
  console.log("b) Se cambió -8 por 9:", arreglo[3][1]);  
  
  arreglo[0][0] = "¡";
  console.log("c) Se cambió 50 por '¡':", arreglo[0][0]);  
  
  arreglo[1].splice(2, 1);
  console.log("d) Arreglo después de eliminar '$':", arreglo);
  
  arreglo[0].splice(2, 1);
  console.log("e) Arreglo después de eliminar 70:", arreglo);
  
  arreglo[3].splice(2, 1);
  console.log("f) Arreglo después de eliminar -2:", arreglo);
  