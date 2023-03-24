function convertTemperature() {
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = document.getElementById("fahrenheit").value;

    if (celsius) {
        const converted = (celsius * 9 / 5) + 32;
        document.getElementById("result").textContent = converted.toFixed(2) + " °F";
    } else if (fahrenheit) {
        const converted = (fahrenheit - 32) * 5 / 9;
        document.getElementById("result").textContent = converted.toFixed(2) + " °C";
    }
}
