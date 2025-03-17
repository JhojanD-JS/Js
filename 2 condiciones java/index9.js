do {
    
    var deseaSalir = confirm("¿Desea salir?");
    

    if (deseaSalir) {
      console.log("El programa se detendrá.");
      break; 
    } else {
      console.log("El programa continuará ejecutándose.");
      
    }
  } while (true);
  
  