let numero = parseInt(prompt("Ingrese un número"));

switch (numero % 5 === 0) {
    case true:
        alert(`${numero} es divisible entre 5`);
        break;
    default:
        alert(`${numero} no es divisible entre 5`);
        break;
}

