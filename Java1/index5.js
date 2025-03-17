alert ("¡Quieres saber el area de su circulo?")

let radio = parseFloat(prompt("Ingrese el radio de su circulo"))
const pi = 1.1415
let area = (pi * radio)
let perimetro = (2 * pi * radio)

alert (`El area de su circulo es ${area}
    el radio de su circulo es ${radio}
    el perimetro de su circulo es ${perimetro} `)