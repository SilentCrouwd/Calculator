// Global Variable
let currentInput = 0;
let savedInput = 0;
let operator = "";
let summeryGlobal = "";
let killswitch = false;
// append To Display

function appendToDisplay(number) {
  if (operator === "=") {
    currentInput = 0;
    savedInput = 0;
    operator = "";
    summeryGlobal = 0;
    updateCurrentInputDisplay("");
    updateProvSummery("", "");
  } else {
    currentInput = currentInput * 10 + number;
    updateCurrentInputDisplay(currentInput);
  }
}

function startOperate() {
  let currsummery = 0;
  if (operator === "+") {
    currsummery = currentInput + savedInput;
    summeryGlobal = currsummery;
    updateResultContainer();
    savedInput = currsummery;

    console.log(summeryGlobal);
  } else if (operator === "-") {
    currsummery = savedInput - currentInput;
    summeryGlobal = currsummery;
    updateResultContainer();
    savedInput = currsummery;
  } else if (operator === "*") {
    currsummery = savedInput * currentInput;
    summeryGlobal = currsummery;
    updateResultContainer();
    savedInput = currsummery;
  } else if (operator === "/") {
    currsummery = savedInput / currentInput;
    summeryGlobal = currsummery;
    updateResultContainer();
    savedInput = currsummery;
  } else if (operator === "=") {
    if (operator !== "=") {
      updateResultContainer();
    }
  } else {
    savedInput = currentInput;
  }
}

function add() {
  startOperate();

  operator = "+";

  updateProvSummery(savedInput, operator);
  updateCurrentInputDisplay(currentInput);

  currentInput = 0;
}
function subtrahieren() {
  startOperate();
  currentInput = 0;
  operator = "-";
  updateProvSummery(savedInput, operator);
  updateCurrentInputDisplay(currentInput);
}
function multipliziern() {
  startOperate();
  currentInput = 0;
  operator = "*";
  updateProvSummery(savedInput, operator);
  updateCurrentInputDisplay(currentInput);
}
function dividieren() {
  startOperate();
  currentInput = 0;
  operator = "/";
  updateProvSummery(savedInput, operator);
  updateCurrentInputDisplay(currentInput);
}
function sumary() {
  startOperate();
  operator = "=";

  updateProvSummery(savedInput, operator);
  updateCurrentInputDisplay(savedInput);
}

function reset() {
  currentInput = 0;
  savedInput = 0;
  summeryGlobal = 0;
  operator = "";
  updateCurrentInputDisplay(currentInput);
  updateProvSummery("", "");
  killswitch = true;
  updateResultContainer();
}

// update and add

// RenderFN
function updateCurrentInputDisplay(text) {
  const newDisplay = document.getElementById("CurrentInputDisplay");

  newDisplay.innerHTML = text;
}

function updateProvSummery(text, text2) {
  const newSummeryDisplay = document.getElementById("summery");

  newSummeryDisplay.innerHTML = text + text2;
}
function updateResultContainer() {
  const newParagraph = document.createElement("p");
  const newRenderelement = document.getElementById("resultDiv");

  if (killswitch === false) {
    newParagraph.innerHTML = `${currentInput} ${operator} ${savedInput} = ${summeryGlobal}`;
    newRenderelement.appendChild(newParagraph);
  } else {
    newRenderelement.innerHTML = "";
    killswitch = false;
    console.log("lets kill something");
  }
}
