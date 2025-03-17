function obtenerNumerosPares(a, b, c) {
    
    const digitos = [a, b, c];
    const permutaciones = [];
  
    
    function permutar(arr, camino = []) {
      if (arr.length === 0) {
        permutaciones.push(camino);
      } else {
        for (let i = 0; i < arr.length; i++) {
          const copia = arr.slice();
          const siguiente = copia.splice(i, 1);
          permutar(copia, camino.concat(siguiente));
        }
      }
    }
  
    permutar(digitos);
  
    
    const numerosPares = new Set();
  
    
    for (const perm of permutaciones) {
      
      const numero = parseInt(perm.join(''), 10);
      if (numero % 2 === 0) { // Si es par
        numerosPares.add(numero);
      }
    }
  
    return Array.from(numerosPares);
  }
  
  
  const resultado = obtenerNumerosPares(3, 4, 7);
  console.log("Números pares formados:", resultado);
  