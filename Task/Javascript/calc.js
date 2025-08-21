// We'll start by selecting the input field and all buttons.

const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

// We’ll make each button clickable and display its value

let currentValue = "";
let dotUsed = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      calculate();
    } else if (value === "AC") {
      clearInput();
    } else if (value === "DEL") {
      deleteLast();
    } else if (value === ".") {
      addDot();
    } else if (value === "+/-") {
      toggleSign();
    } else {
      addToInput(value);
    }
  });
});

//function

function addToInput(value) {
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(value)) {
    // If operator clicked, reset dotUsed for next number
    dotUsed = false;
  }

  currentValue += value;
  input.value = currentValue;
}

//clear input

function clearInput() {
  currentValue = "";
  input.value = "0";
  dotUsed = false;
}

//deletelast

function deleteLast() {
  if (currentValue.length > 0) {
    if (currentValue.slice(-1) === ".") {
      dotUsed = false;
    }
    currentValue = currentValue.slice(0, -1);
    input.value = currentValue || "0";
  }
}

//add dot

function addDot() {
  if (!dotUsed) {
    currentValue += ".";
    input.value = currentValue;
    dotUsed = true;
  }
}

// toggleSign()

function toggleSign() {
  if (currentValue !== "") {
    if (currentValue.startsWith("-")) {
      currentValue = currentValue.slice(1);
    } else {
      currentValue = "-" + currentValue;
    }
    input.value = currentValue;
  }
}

//calculate

function calculate() {
  try {
    currentValue = eval(currentValue).toString();
    input.value = currentValue;
    dotUsed = currentValue.includes(".");
  } catch {
    input.value = "Error";
    currentValue = "";
  }
}