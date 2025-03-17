function esReversible(n) {
    
    if (n < 0 || n > 999) {
      console.error("El número debe estar entre 0 y 999.");
      return false;
    }
  
    
    const cadena = n.toString();
    const reversoCadena = cadena.split("").reverse().join("");
    const reversoNumero = parseInt(reversoCadena, 10);
    
    
    const suma = n + reversoNumero;
    
    
    const sumaStr = suma.toString();
    for (let i = 0; i < sumaStr.length; i++) {
      const digito = parseInt(sumaStr[i], 10);
      if (digito % 2 === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  
  console.log("36 es reversible?", esReversible(36));   
  console.log("409 es reversible?", esReversible(409)); 
  console.log("123 es reversible?", esReversible(123)); 
  