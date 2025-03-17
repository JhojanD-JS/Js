function generarSerie(n) {
    const serie = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        
        let k = (i + 1) / 2;
        serie.push(-2 - 6 * (k - 1));
      } else {
        
        let k = i / 2;
        serie.push(6 * k);
      }
    }
    return serie;
  }
  
  
  const n = 10; 
  console.log("Los primeros", n, "términos de la serie son:", generarSerie(n));
  