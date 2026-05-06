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
    operator = "+";
    summeryGlobal = 0;
    renderOperationDisplay(currentInput);
    renderSummaryDisplay("", "");
  } else {
    currentInput = currentInput * 10 + number;
    renderOperationDisplay(currentInput);
  }
}

function startOperate() {
  let currsummery = 0;
  if (operator === "+") {
    currsummery = currentInput + savedInput;
    summeryGlobal = currsummery;
    renderResult();
    savedInput = currsummery;

    console.log(summeryGlobal);
  } else if (operator === "-") {
    currsummery = savedInput - currentInput;
    summeryGlobal = currsummery;
    renderResult();
    savedInput = currsummery;
  } else if (operator === "*") {
    currsummery = savedInput * currentInput;
    summeryGlobal = currsummery;
    renderResult();
    savedInput = currsummery;
  } else if (operator === "/") {
    currsummery = savedInput / currentInput;
    summeryGlobal = currsummery;
    renderResult();
    savedInput = currsummery;
  } else if (operator === "=") {
    if (operator !== "=") {
      renderResult();
    }
  } else {
    savedInput = currentInput;
  }
}

function add() {
  startOperate();

  operator = "+";

  renderSummaryDisplay(savedInput, operator);
  renderOperationDisplay(currentInput);

  currentInput = 0;
}
function subtrahieren() {
  startOperate();
  currentInput = 0;
  operator = "-";
  renderSummaryDisplay(savedInput, operator);
  renderOperationDisplay(currentInput);
}
function multipliziern() {
  startOperate();
  currentInput = 0;
  operator = "*";
  renderSummaryDisplay(savedInput, operator);
  renderOperationDisplay(currentInput);
}
function dividieren() {
  startOperate();
  currentInput = 0;
  operator = "/";
  renderSummaryDisplay(savedInput, operator);
  renderOperationDisplay(currentInput);
}
function sumary() {
  startOperate();
  operator = "=";

  renderSummaryDisplay(savedInput, operator);
  renderOperationDisplay(savedInput);
}

function reset() {
  currentInput = 0;
  savedInput = 0;
  summeryGlobal = 0;
  operator = "+";
  renderOperationDisplay(currentInput);
  renderSummaryDisplay("", "");
  killswitch = true;
  renderResult();
}

// update and add

// RenderFN
function renderOperationDisplay(text) {
  const newDisplay = document.getElementById("operationDisplay");

  newDisplay.innerHTML = text;
}

function renderSummaryDisplay(text, text2) {
  const newSummeryDisplay = document.getElementById("summery");

  newSummeryDisplay.innerHTML = text + text2;
}
function renderResult() {
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
