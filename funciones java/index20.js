function calcularArea(largo, ancho) {
    return largo * ancho;
  }
  
  
  function calcularPerimetro(largo, ancho) {
    return 2 * (largo + ancho);
  }
  
  
  const largo = 5;
  const ancho = 3;
  
  const area = calcularArea(largo, ancho);
  const perimetro = calcularPerimetro(largo, ancho);
  
  console.log(`Área del rectángulo: ${area}`);
  console.log(`Perímetro del rectángulo: ${perimetro}`);
  