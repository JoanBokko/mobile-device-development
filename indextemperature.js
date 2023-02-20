//Export Temperatur
export let fahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * (5/9);
    return `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
};


