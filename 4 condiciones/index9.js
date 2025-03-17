function descomponerEnFactoresPrimos(n) {
    if (n < 2) return n.toString(); 
    
    let factores = [];
    let contador;
    
    
    contador = 0;
    while (n % 2 === 0) {
      contador++;
      n /= 2;
    }
    if (contador > 0) {
      factores.push(contador > 1 ? `2^${contador}` : "2");
    }
    
   
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      contador = 0;
      while (n % i === 0) {
        contador++;
        n /= i;
      }
      if (contador > 0) {
        factores.push(contador > 1 ? `${i}^${contador}` : `${i}`);
      }
    }
    
    
    if (n > 2) {
      factores.push(n.toString());
    }
    
    
    return factores.join(" * ");
  }
  
  
  const numero = 360;
  console.log(`La descomposición en factores primos de ${numero} es: ${descomponerEnFactoresPrimos(numero)}`);
  
  