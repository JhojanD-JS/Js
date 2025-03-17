function calcularFactorial(n) {
    
    if (n === 0 || n === 1) {
        return 1;
    }

    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(calcularFactorial(7));
console.log(calcularFactorial(0));
console.log(calcularFactorial(5));