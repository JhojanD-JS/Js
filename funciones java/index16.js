function facturacion(monto, medioDePago) {
    let descuento = 0;
  
    if (monto >= 200 && monto <= 400) {
      switch (medioDePago.toUpperCase()) {
        case 'E':
          descuento = 0.30; 
          break;
        case 'D':
          descuento = 0.20; 
          break;
        case 'C':
          descuento = 0.10; 
          break;
        default:
          console.log('Medio de pago no válido');
          return;
      }
    } else if (monto > 400) {
      descuento = 0.40; 
    }
  
    const montoDescuento = monto * descuento;
    const montoFinal = monto - montoDescuento;
    return montoFinal;
  }
  
  console.log(facturacion(250, 'E')); 
  console.log(facturacion(300, 'D')); 
  console.log(facturacion(500, 'C')); 
  console.log(facturacion(150, 'E')); 
  
 
  