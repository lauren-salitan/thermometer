var temperature = 50;
var height = document.getElementById("new-thermometer-mercury").style.height;

function newUp() {
  newIncreaseFNumber();
}

function newDown() {
  newDecreaseFNumber();
}

function newIncreaseFNumber() {
  var numberSpan = document.getElementById("new-f-number");
  var currentNumber = parseInt(numberSpan.textContent);
  if (currentNumber < 100) {
    var newNumber = currentNumber + 10;
    numberSpan.textContent = newNumber;
    increaseHeight();
  } else {
    alert("too hot!");
  }
}
function increaseHeight() {
  var thermometerMercury = document.getElementById("new-thermometer-mercury");
  newNewNumber = document.getElementById("new-f-number").textContent;
  thermometerMercury.style.height = newNewNumber + "%";
}
function newDecreaseFNumber() {
  var numberSpan = document.getElementById("new-f-number");
  var currentNumber = parseInt(numberSpan.textContent);
  if (currentNumber > 0) {
    var newNumber = currentNumber - 10;
    numberSpan.textContent = newNumber;
    decreaseHeight();
  } else {
    alert("too cold!");
  }
}
function decreaseHeight() {
  var thermometerMercury = document.getElementById("new-thermometer-mercury");
  newNewNumber = document.getElementById("new-f-number").textContent;
  thermometerMercury.style.height = newNewNumber + "%";
}