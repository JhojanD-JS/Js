function esPrimo(n) {
    
    if (n <= 1) return false;
    r
    if (n === 2) return true;
    
    if (n % 2 === 0) return false;
    
    
    const limite = Math.sqrt(n);
    for (let i = 3; i <= limite; i += 2) {
      if (n % i === 0) return false;
    }
    
    return true;
  }
  
  
  const numero = 73;
  console.log(numero, "es primo?", esPrimo(numero));  
  
  const numero2 = 35;
  console.log(numero2, "es primo?", esPrimo(numero2));  
  
 
  
  