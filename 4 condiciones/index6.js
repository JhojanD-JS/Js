function divisionPorRestasSucesivas(dividendo, divisor) {
    
    if (divisor === 0) {
      console.error("Error: No se puede dividir por cero.");
      return null;
    }
    
    
    const esNegativo = (dividendo < 0) !== (divisor < 0); 
    let dividendoAbs = Math.abs(dividendo);
    const divisorAbs = Math.abs(divisor);
    
    let cociente = 0;
    
    
    while (dividendoAbs >= divisorAbs) {
      dividendoAbs -= divisorAbs;
      cociente++;
    }
    
    
    if (esNegativo) {
      cociente = -cociente;
    }
    
    return cociente;
  }
  
  
  console.log("25 dividido por 4 =", divisionPorRestasSucesivas(25, 4));  
  console.log("-25 dividido por 4 =", divisionPorRestasSucesivas(-25, 4)); 
  console.log("25 dividido por -4 =", divisionPorRestasSucesivas(25, -4)); 
  console.log("-25 dividido por -4 =", divisionPorRestasSucesivas(-25, -4)); 
  