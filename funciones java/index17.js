function operaciones(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: División por cero";
        }
    } else {
        return "Operación no válida";
    }
}

console.log(operaciones(2, 5, "suma"));           
console.log(operaciones(5, 2, "resta"));          
console.log(operaciones(2, 3, "multiplicacion")); 
console.log(operaciones(6, 2, "division"));      
console.log(operaciones(2, 5, "potencia"));      



