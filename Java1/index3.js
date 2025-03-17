// ejercicio 3

alert ("💸🐱‍👤Binevenido a tu almacen🐱‍👤💸")
alert ("seleccione su producto ")

let NombredelElectrodomestico = parseInt(prompt("ingrese el nombre del producto "));
let valordelElectrodomestico = parseInt(prompt("ingrese el valor del producto"));
let coutas = parseInt(prompt("ingrese el plazo de meses del pago del producto "));
let meses = coutas
const intereses =(5/100)
let precioTotal = (valordelElectrodomestico*intereses) + (valordelElectrodomestico)
precioTotal = precioTotal/ coutas
precioFinal = precioTotal *meses
alert (`el valor del producto es de ${valordelElectrodomestico} pesos 
    pagando a ${coutas} cuotas
    pagaras en total ${precioTotal}pesos
    pagara a coutas de ${precioTotal}pesos
    pagando en total ${precioTotal}`) 

