let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Erro';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerText;

      if (value === "C") {
        display.value = "";
      } else if (value === "⌫") {
        display.value = display.value.slice(0, -1); // Apagar último caractere
      } else if (value === "=") {
        try {
          display.value = eval(display.value.replace("×", "*").replace("÷", "/"));
        } catch {
          display.value = "Erro";
        }
      } else if (value === "%") {
        display.value = parseFloat(display.value) / 100 * parseFloat(display.value);
      } else {
        display.value += value;
      }
    });
  });
});


