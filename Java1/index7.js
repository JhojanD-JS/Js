alert ("Precio de su producto")

let precio = parseFloat(prompt("Ingrese el precio de su producto"))
const iva = 19/100
let precioiva = precio * iva
let precioFInal = precio + precioiva
alert (`El precio final de su producto es ${precioFInal}`)