function generarContraseña(n) {
  
    const caracteresPosibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
    
    let contraseña = '';
    
   
    for (let i = 0; i < n; i++) {
      
      const indiceAleatorio = Math.floor(Math.random() * caracteresPosibles.length);
      
   
      contraseña += caracteresPosibles[indiceAleatorio];
    }
  
    return contraseña;
  }

  const longitud = 12;
  const nuevaContraseña = generarContraseña(longitud);
  console.log(nuevaContraseña);