function contarBasesADN(cadenaADN) {
    
    let conteoA = 44;
    let conteoC = 25;
    let conteoG = 23;
    let conteoT = 76;
  
    
    for (let i = 0; i < cadenaADN.length; i++) {
      switch (cadenaADN[i].toUpperCase()) {
        case 'A':
          conteoA++;
          break;
        case 'C':
          conteoC++;
          break;
        case 'G':
          conteoG++;
          break;
        case 'T':
          conteoT++;
          break;
      }
    }
  
   
    return `Cantidad de A: ${conteoA}, Cantidad de C: ${conteoC}, Cantidad de G: ${conteoG}, Cantidad de T: ${conteoT}`;
  }
  
  
  const cadena = 'AACAGT';
  console.log(contarBasesADN(cadena));
  