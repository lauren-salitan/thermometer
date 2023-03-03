async function getCurrentWeather() {
    return await fetch
    ('https://api.open-meteo.com/v1/forecast?latitude=30.26&longitude=-97.74&current_weather=true&temperature_unit=fahrenheit')
    .then((response) => response.json())
    .then((data) => {return data.current_weather.temperature;});
    }
    
    async function setTemperatureInHTML() {
        let currentTemp = await getCurrentWeather();
        console.log(currentTemp);
        var numberSpan = document.getElementById("new-f-number");
        numberSpan.textContent = currentTemp;
        setHeight(currentTemp);

    }
    
    setTemperatureInHTML();

function newUp() {
  newIncreaseFNumber();
}

function newDown() {
  newDecreaseFNumber();
}
function setHeight(newNumber) {
  var thermometerMercury = document.getElementById("new-thermometer-mercury");
  thermometerMercury.style.height = newNumber + "%";
}
function newIncreaseFNumber() {
  var numberSpan = document.getElementById("new-f-number");
  var currentNumber = parseInt(numberSpan.textContent);
  if (currentNumber < 100) {
    var newNumber = currentNumber + 10;
    numberSpan.textContent = newNumber;
    setHeight(newNumber);
  } else {
    alert("too hot!");
  }
}
function newDecreaseFNumber() {
  var numberSpan = document.getElementById("new-f-number");
  var currentNumber = parseInt(numberSpan.textContent);
  if (currentNumber > 0) {
    var newNumber = currentNumber - 10;
    numberSpan.textContent = newNumber;
    setHeight(newNumber);
  } else {
    alert("too cold!");
  }
}