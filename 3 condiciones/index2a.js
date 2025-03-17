function primeraPosicion(cadenaPrincipal, subcadena) {
    return cadenaPrincipal.indexOf(subcadena);
  }
  
  
  const cadenaConstante = "ATGCGATACGCTTACGATC";
  const subcadenaUsuario = "ACG";
  console.log("2.a:", primeraPosicion(cadenaConstante, subcadenaUsuario)); // Imprime la posición o -1
  