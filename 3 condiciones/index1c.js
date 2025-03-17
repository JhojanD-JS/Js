function generarCadenaDistribucion(longitud) {
    
    if (longitud % 10 !== 0) {
      console.error("La longitud debe ser un múltiplo de 10.");
      return "";
    }
    
    const x = longitud / 10;
    
    let arr = [];
    arr.push(...Array(x).fill("G"));       
    arr.push(...Array(4 * x).fill("C"));     
    arr.push(...Array(2 * x).fill("T"));     
    arr.push(...Array(3 * x).fill("A"));     
  
   
    function mezclar(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    
    return mezclar(arr).join('');
  }
  
  
  console.log("1.c:", generarCadenaDistribucion(30)); 
  