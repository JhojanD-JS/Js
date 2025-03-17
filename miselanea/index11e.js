function contarElementos(arr) {
    let count = 0;
    
    function contar(arr) {
        for (let item of arr) {
            if (Array.isArray(item)) {
                contar(item);
            } else {
                count++;
            }
        }
    }
    
    contar(arr);
    return count;
}


const arreglo = [[1, 2], [3, [4, 5]], [6, [7, [8, 9]]]];
console.log(contarElementos(arreglo)); // Salida: 9
