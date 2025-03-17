function generarCadenaConPorcentaje(longitud, porcentajePrimerBase) {
    
    if (porcentajePrimerBase < 1 || porcentajePrimerBase > 99) {
      console.error("El porcentaje de la primera base debe estar entre 1 y 99.");
      return "";
    }
    
    const bases = ['A', 'T', 'C', 'G'];
    
    let indice1 = Math.floor(Math.random() * bases.length);
    let indice2;
    do {
      indice2 = Math.floor(Math.random() * bases.length);
    } while (indice2 === indice1);
    
    const base1 = bases[indice1];
    const base2 = bases[indice2];
    
    
    
    let cantidadBase1 = Math.floor((porcentajePrimerBase / 100) * longitud);
    
    if (cantidadBase1 < 1) cantidadBase1 = 1;
    let cantidadBase2 = longitud - cantidadBase1;
    
    if (cantidadBase2 < 1) {
      cantidadBase2 = 1;
      cantidadBase1 = longitud - 1;
    }
    
    
    let arr = [];
    arr.push(...Array(cantidadBase1).fill(base1));
    arr.push(...Array(cantidadBase2).fill(base2));
    
    
    function mezclar(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    
    return mezclar(arr).join('');
  }
  
  
  console.log("1.d:", generarCadenaConPorcentaje(100, 70));
  