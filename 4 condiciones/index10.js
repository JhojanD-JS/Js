function esNumeroPerfecto(n) {
    
    if (n <= 0) {
      console.error("El número debe ser un entero positivo.");
      return false;
    }
    
    let sumaDivisores = 0;
    
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        sumaDivisores += i;
      }
    }
    
    return sumaDivisores === n;
  }
  
 
  const numero = 28;
  if (esNumeroPerfecto(numero)) {
    console.log(`${numero} es un número perfecto.`);
  } else {
    console.log(`${numero} no es un número perfecto.`);
  }
  