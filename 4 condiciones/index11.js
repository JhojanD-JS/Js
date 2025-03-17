function mcd(a, b) {
    
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  
  const num1 = 48;
  const num2 = 18;
  console.log(`El MCD de ${num1} y ${num2} es:`, mcd(num1, num2));
  