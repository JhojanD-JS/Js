function sumaPrimerosNaturales (n) {
    return (n*(n+1)) / 2;
}

let n =5;  // podemos cambiar el valor de n por 10 
let resultado = sumaPrimerosNaturales(n);

console.log("la suma de los primeros" + n + "numero naturales es:" + resultado);