function eliminarVocales(cadena) {
    
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let resultado = '';
    
    for (let i = 0; i < cadena.length; i++) {
        if (!vocales.includes(cadena[i])) {
            resultado += cadena[i];
        }
    }
    
    return resultado;
}

let cadenaOriginal = "Hola Mundo";
let cadenaSinVocales = eliminarVocales(cadenaOriginal);

console.log(cadenaSinVocales); 
