function ocurrenciasMaximas(num) {
    
    const cadena = num.toString();
    const frecuencia = {};
  
    
    for (let digito of cadena) {
      frecuencia[digito] = (frecuencia[digito] || 0) + 1;
    }
  
    
    let maxOcurrencias = 0;
    for (let digito in frecuencia) {
      if (frecuencia[digito] > maxOcurrencias) {
        maxOcurrencias = frecuencia[digito];
      }
    }
  
    return maxOcurrencias;
  }
  
  
  const numero = 343331;
  console.log(`El dígito que más se repite en ${numero} aparece ${ocurrenciasMaximas(numero)} veces.`);
  