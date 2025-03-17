alert ("valor del producto")

let valorProducto = parseFloat(prompt("Ingrese valor del producto"))
const descuento = 10/100
let cantidad = valorProducto * descuento
let precioFInal = valorProducto - cantidad
alert (`El valor de su producto es ${valorProducto} pesos pero con el descuento del 10% ${precioFInal}`)