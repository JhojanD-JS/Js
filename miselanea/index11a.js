let a = [2, 6, 9, 0, 5];
let copiaDependienteA = a; // Ambas variables apuntan al mismo arreglo
// Ejemplo: Si modificas copiaDependienteA, se modifica a también
copiaDependienteA[0] = 100;
console.log("Arreglo a:", a); // Imprime: [100, 6, 9, 0, 5]

