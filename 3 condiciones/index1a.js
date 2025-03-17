function generarCadenaUnica(base, longitud) {
    
    const basesValidas = ['A', 'T', 'C', 'G'];
    if (!basesValidas.includes(base)) {
      console.error("La base debe ser A, T, C o G.");
      return "";
    }
    
    return base.repeat(longitud);
  }
  
  
  console.log("1.a:", generarCadenaUnica("A", 20));
  