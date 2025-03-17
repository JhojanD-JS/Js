function calcularSerie(n) {
    let suma = 0;

    for (let i = 2; i <= n; i++) {
        if (i % 3 === 0) {
            suma -= 1 / i; 
        } else {
            suma += 1 / i;
        }
    }

    return suma;
}


let n = 10; 
console.log("Resultado de la serie para n =", n, ":", calcularSerie(n));
