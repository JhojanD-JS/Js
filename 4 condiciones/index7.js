function potencia(a, b) {
    
    let resultado = 1;
    for (let i = 0; i < b; i++) {
      resultado *= a;
    }
    return resultado;
  }
  
  
  console.log("2^3 =", potencia(2, 3)); 
  console.log("5^4 =", potencia(5, 4)); 
  