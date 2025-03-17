let b = ["abc", 4, 88, 99];
let copiaIndependienteB = [...b]; // Se usa spread operator para clonar el arreglo
// Ejemplo: Modificando la copia no afecta al arreglo original
copiaIndependienteB[1] = 500;
console.log("Arreglo b:", b); // Imprime: ["abc", 4, 88, 99]
console.log("Copia independiente de b:", copiaIndependienteB);