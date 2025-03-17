function buscarLetra(letra, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        if (buscarLetra(letra, arr[i])) {
          return true;
        }
      } else {
        if (arr[i] === letra) {
          return true;
        }
      }
    }
    return false;
  }
  
  
  function verificarLetra(letra) {
    const arreglo = ["a", "b", "c", "d", "e", "f", "g"]; 
    if (buscarLetra(letra, arreglo)) {
      return "La letra '" + letra + "' se encuentra en el arreglo.";
    } else {
      return "La letra '" + letra + "' no se encuentra en el arreglo.";
    }
  }
  
 
  console.log(verificarLetra("c")); 
  console.log(verificarLetra("z")); 
  