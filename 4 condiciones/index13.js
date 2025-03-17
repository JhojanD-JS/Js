function generarTriangulo(n) {
    let resultado = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            resultado += "* ";
        }
        resultado += "\n"; 
    }

    return resultado;
}


let n = 4; 
console.log(generarTriangulo(n));
