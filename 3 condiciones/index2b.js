function contarOcurrencias(cadenaPrincipal, subcadena) {
    let count = 0;
    let posicion = cadenaPrincipal.indexOf(subcadena);
    while (posicion !== -1) {
      count++;
      
      posicion = cadenaPrincipal.indexOf(subcadena, posicion + 1);
    }
    return count;
  }
  
 
  console.log("2.b:", contarOcurrencias(cadenaConstante, subcadenaUsuario));
  