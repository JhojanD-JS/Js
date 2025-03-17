let producto = prompt("ingrese el nombre del producto (lentejas, crema, arroz, vino):");

switch (producto) {
    case "lentejas":
    case "arroz":
        alert(`${producto} no paga IVA`);
        break;
    case "vino":
    case "crema":
        alert(`${producto} paga IVA`);
        break;
    default:
        alert("el producto de ingreso no existe");
}
