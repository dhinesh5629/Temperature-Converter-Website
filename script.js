console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#ffa41b";
    tempLoad();
}, 5000);

tempLoad();

const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempFrom = document.getElementById('temp_diff').value;
    const tempTo = document.getElementById('temp_to').value;

    const celTOfah = (cel) => {
        let fahrenheit = (cel * (9 / 5)) + 32;
        return fahrenheit;
    }

    const celTOkel = (cel) => {
        let kelvin = cel + 273.15;
        return kelvin;
    }

    const fahTOcel = (fehr) => {
        let celsius = (fehr - 32) * 5 / 9;
        return celsius;
    }

    const fahTOkel = (fehr) => {
        let kelvin = (fehr - 32) * 5 / 9 + 273.15;
        return kelvin;
    }

    const kelTOcel = (kel) => {
        let celsius = kel - 273.15;
        return celsius;
    }

    const kelTOfah = (kel) => {
        let fahrenheit = (kel - 273.15) * 9 / 5 + 32;
        return fahrenheit;
    }

    let result;
    if (tempFrom === "cel" && tempTo === "fah") {
        result = celTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Fahrenheit`;
    } else if (tempFrom === "cel" && tempTo === "kel") {
        result = celTOkel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Kelvin`;
    } else if (tempFrom === "fah" && tempTo === "cel") {
        result = fahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Celsius`;
    } else if (tempFrom === "fah" && tempTo === "kel") {
        result = fahTOkel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Kelvin`;
    } else if (tempFrom === "kel" && tempTo === "cel") {
        result = kelTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Celsius`;
    } else if (tempFrom === "kel" && tempTo === "fah") {
        result = kelTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Fahrenheit`;
    } else {
        document.getElementById('resultContainer').innerHTML = "Invalid conversion";
    }

    // Clear input fields
    document.getElementById('temp').value = "";
}

const resetConversion = () => {
    // Clear result and reset selection to default
    document.getElementById('resultContainer').innerHTML = "";
    document.getElementById('temp_diff').selectedIndex = 0;
    document.getElementById('temp_to').selectedIndex = 0;
}
