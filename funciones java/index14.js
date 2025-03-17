function permitirEntrada(edad, estatura, permisoParental) {
    
    if (edad >= 18 && estatura > 150) {
      return "Acceso permitido";
    }
    
    
    if (edad < 18 && estatura > 150 && permisoParental) {
      return "Acceso permitido con permiso parental";
    }
    
    
    return "Acceso denegado";
  }
  
  
  console.log(permitirEntrada(20, 180, false)); 
  console.log(permitirEntrada(17, 160, true));  
  console.log(permitirEntrada(17, 140, true));  
  console.log(permitirEntrada(18, 175, false)); 
  