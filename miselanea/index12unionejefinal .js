// 1. forEach para imprimir los elementos
let arr1 = [3, 50, 70, 600, 40];
arr1.forEach(element => console.log(element));

// 2. forEach para imprimir los elementos multiplicados por 3
arr1.forEach(element => console.log(element * 3));

// 3. while para imprimir los elementos
let i = 0;
while (i < arr1.length) {
    console.log(arr1[i]);
    i++;
}

// 4. for con módulo para mostrar elementos pares
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}

// 5. Verificar si "Juan" está en el arreglo
let arr2 = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
let found = false;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "Juan") {
        found = true;
        break;
    }
}
console.log(found ? "Juan está en el arreglo" : "Juan no está en el arreglo");

// 6. Contar cuántas veces aparece "Maria"
let arr3 = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let countMaria = 0;
arr3.forEach(name => {
    if (name === "Maria") countMaria++;
});
console.log("Maria aparece", countMaria, "veces");

// 7. Sumar elementos de un arreglo
let arr4 = [15, 7, 9, 12, 1];
let sum = 0;
arr4.forEach(num => sum += num);
console.log("Suma de los elementos:", sum);

// 8. Sumar los cuadrados de los elementos
let arr5 = [-2, 8, 99, 1, 7];
let sumSquares = 0;
arr5.forEach(num => sumSquares += num * num);
console.log("Suma de los cuadrados:", sumSquares);

// 9. Contar cuántas veces aparece false
let arr6 = [true, true, false, true, false, false];
let countFalse = 0;
let j = 0;
while (j < arr6.length) {
    if (!arr6[j]) countFalse++;
    j++;
}
console.log("Cantidad de false en el arreglo:", countFalse);

// 10. Verificar si se puede formar "adso"
let arr7 = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let word = "adso";
let lettersFound = word.split('').every(letter => arr7.includes(letter));
console.log(lettersFound ? "Se puede formar 'adso'" : "No se puede formar 'adso'");

// 11. Mostrar la tabla del 5 del 10 al 20
let arr8 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < arr8.length; i++) {
    console.log(`5 x ${arr8[i]} = ${5 * arr8[i]}`);
}
