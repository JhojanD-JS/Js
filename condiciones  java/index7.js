function primo(num) {
    if (num < 1 || num > 15) {
        console.log("El número debe estar entre 1 y 15.");
        return;
    }
    if (num === 1) {
        console.log("El número 1 no es primo.");
        return;
    }
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(`El ${num} no es primo.`);
            return;  
        }
    }
    
    console.log(`El ${num} es primo.`);
}

primo(15);
primo(7);
primo(8);
primo(16);
primo(2);

