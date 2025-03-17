function mcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  
  function mcm(a, b) {
    
    return Math.abs(a * b) / mcd(a, b);
  }
  
  
  const num1 = 12;
  const num2 = 18;
  console.log(`El MCM de ${num1} y ${num2} es:`, mcm(num1, num2));
  