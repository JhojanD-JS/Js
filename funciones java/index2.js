function calcularVolumenCubo(lado) {
    return Math.pow(lado, 3);
  }

  let lado = 5;
let volumen = calcularVolumenCubo(lado);
console.log(`El volumen del cubo con lado ${lado} es ${volumen}.`);
