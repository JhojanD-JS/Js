function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


console.log("0°C es igual a " + celsiusToFahrenheit(0) + "°F");
console.log("32°F es igual a " + fahrenheitToCelsius(32) + "°C");
