function contarVocales(cadena) {
    const vocales = "aeiouAEIOU";
    let contador = 0;
  
    for (let i = 0; i < cadena.length; i++) {  
        if (vocales.includes(cadena[i])) { 
            contador++;
        }
    }
  
    return contador;
}

console.log(contarVocales("Hola Mundo"));
