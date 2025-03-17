function obtenerCaracterAleatorio() {
    const caracteresEspeciales = '!@#$%^&*()_+[]{}|;:,.<>?';
    const indiceAleatorio = Math.floor(Math.random() * caracteresEspeciales.length);
    return caracteresEspeciales.charAt(indiceAleatorio);
  }
  
 
  function generarContraseña(palabraBase) {
    
    const numeros = '0123456789';
    const caracteresEspeciales = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    
    let contraseña = palabraBase;
    
    
    const numeroAleatorio = numeros.charAt(Math.floor(Math.random() * numeros.length));
    contraseña += numeroAleatorio;
    
    
    const caracterEspecialAleatorio = obtenerCaracterAleatorio();
    contraseña += caracterEspecialAleatorio;
    
    
    contraseña = contraseña.split('').sort(() => Math.random() - 0.5).join('');
    
    return contraseña;
  }
  
  
  function imprimirContraseña(contraseña) {
    console.log(`La contraseña generada es: ${contraseña}`);
  }
  
  
  const palabraBase = 'Segura';
  const contraseñaGenerada = generarContraseña(palabraBase);
  imprimirContraseña(contraseñaGenerada);
  