function sumaDivisores(n) {
    let suma = 0;
    
    
    for (let i = 1; i <= Math.floor(n / 2); i++) {
      if (n % i === 0) {
        suma += i;
      }
    }
    return suma;
  }
  
  
  function sonNumerosAmigos(a, b) {
    
    
    if (a <= 0 || b <= 0) {
      return false;
    }
    return (sumaDivisores(a) === b && sumaDivisores(b) === a);
  }
  
  
  const num1 = 220;
  const num2 = 284;
  
  if (sonNumerosAmigos(num1, num2)) {
    console.log(`${num1} y ${num2} son números amigos.`);
  } else {
    console.log(`${num1} y ${num2} no son números amigos.`);
  }
  