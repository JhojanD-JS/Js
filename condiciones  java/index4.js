let angulo1 = parseInt(prompt("Ingrese el primer ángulo del triángulo"));
let angulo2 = parseInt(prompt("Ingrese el segundo ángulo del triángulo"));
let angulo3 = parseInt(prompt("Ingrese el tercer ángulo del triángulo"));

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (angulo1 + angulo2 + angulo3 === 180) {
        alert("Esto es un triángulo.");
    } else {
        alert("La suma de los ángulos no es 180. No corresponde a un triángulo.");
    }
} else {
    alert("No corresponde a un triángulo.");
}
