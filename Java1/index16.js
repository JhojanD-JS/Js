let a = parseInt(prompt("Ingresa el valor de a"));
let b = parseInt(prompt("Ingresa el valor de b"));
let c = parseInt(prompt("Ingresa el valor de c"));

let discriminante = (b * b) - (4 * a * c);

if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    alert(`Las soluciones de la ecuación son: x1 = ${x1} y x2 = ${x2}`);
} else if (discriminante === 0) {
    let igualCero = -b / (2 * a);
    alert(`La ecuación tiene una única solución: x = ${igualCero}`);
} else {
    alert("La ecuación no tiene soluciones reales");
}
