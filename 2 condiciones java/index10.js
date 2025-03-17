function calcularPromedio(numeros) {
    
    if (numeros.length === 0) {
      return 0;
    }
  
    
    const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  
    
    const promedio = sumaTotal / numeros.length;
  
    return promedio;
  }
  
  
  const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const promedio = calcularPromedio(numeros);
  console.log("El promedio es:", promedio);
  