function evaluarAprobacion(nota1, nota2, nota3, nota4, nota5) {
   
    const promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
  
    if (promedio >= 3.0) {
      console.log("¡Aprobado! El promedio es: " + promedio);
    } else {
      console.log("Reprobado. El promedio es: " + promedio);
    }
  }
  
  evaluarAprobacion(5.0, 4.5, 4.0, 4.0, 3.0); 
