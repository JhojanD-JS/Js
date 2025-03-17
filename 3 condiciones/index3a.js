function frecuenciaConsecutiva(cadena) {
    if (cadena.length === 0) return "";
    
    let resultado = [];
    let contador = 1;
    
    for (let i = 1; i < cadena.length; i++) {
      if (cadena[i] === cadena[i - 1]) {
        contador++;
      } else {
        resultado.push(cadena[i - 1] + contador);
        contador = 1;
      }
    }
    
    resultado.push(cadena[cadena.length - 1] + contador);
    
    
    return resultado.join(",");
  }
  
  
  const cadenaEjemplo = "AAAGTCCAGGTTTT";
  console.log("3.a:", frecuenciaConsecutiva(cadenaEjemplo));
  