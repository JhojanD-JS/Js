function generarCadenaDosBases(longitud) {
    const bases = ['A', 'T', 'C', 'G'];
    
    
    let indice1 = Math.floor(Math.random() * bases.length);
    let indice2;
    do {
      indice2 = Math.floor(Math.random() * bases.length);
    } while (indice2 === indice1);
    
    const base1 = bases[indice1];
    const base2 = bases[indice2];
    
    let cadena = "";
    for (let i = 0; i < longitud; i++) {
      
      cadena += Math.random() < 0.5 ? base1 : base2;
    }
    return cadena;
  }
  
  
  console.log("1.b:", generarCadenaDosBases(20));
  