/*  
CORRECION DE EXAMEN 1 : 
En esta empresa se trabaja de 8am a 12pm y de 2pm a 6pm 
se trabajan 4 horas en la mañana y 4 horas en la tarde una jornada de 8 horas
*/

   let horasTrabajadasMañana = 4;
let horasTrabajadasTarde = 4;
const horasDiarias = horasTrabajadasMañana + horasTrabajadasTarde;
let horaBonificacion = 2000;

let horasTrabajadas = parseInt(prompt("Ingrese número de horas trabajadas"));

if (horasTrabajadas < horasDiarias) {
    alert("El trabajador no hizo las horas necesarias del día");
} else if (horasTrabajadas === horasDiarias) {
    alert("El trabajador trabajó día normal");
} else {
    let horasExtras = parseInt(prompt("Ingrese horas extra trabajadas"));
    let x = (horasExtras * horaBonificacion);
    alert(`El total de la bonificación es igual a ${x} pesos`);
}
