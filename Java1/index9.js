let precio = parseFloat(prompt("Ingrese el valor"))
let descuento = parseFloat(prompt("Ingrese el descuento"))
let cantidad = descuento/100
let precioDescuento = precio * cantidad
let precioTotal = precio - precioDescuento
alert (`El valor es de ${precio} pesos y con el descuento ${descuento}% es de ${precioTotal}`)