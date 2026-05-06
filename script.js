// Global Variable
let currentInput = 0;
let saveNumber = 0;
let operator = "";
let flowSummery = "";
let killswitch = false;
// append To Display

function startOperate() {
  let currsummery = 0;
  if (operator === "+") {
    currsummery = currentInput + saveNumber;
    flowSummery = currsummery;
    renderResult();
    saveNumber = currsummery;

    console.log(flowSummery);
  } else if (operator === "-") {
    currsummery = saveNumber - currentInput;
    flowSummery = currsummery;
    renderResult();
    saveNumber = currsummery;
  } else if (operator === "*") {
    currsummery = saveNumber * currentInput;
    flowSummery = currsummery;
    renderResult();
    saveNumber = currsummery;
  } else if (operator === "/") {
    currsummery = saveNumber / currentInput;
    flowSummery = currsummery;
    renderResult();
    saveNumber = currsummery;
  } else if (operator === "=") {
    if (operator !== "=") {
      renderResult();
    }
  } else {
    saveNumber = currentInput;
  }
}

function add() {
  startOperate();

  operator = "+";

  renderSummaryDisplay(saveNumber, operator);
  renderOperationDisplay(currentInput);

  currentInput = 0;
}
function subtrahieren() {
  startOperate();
  currentInput = 0;
  operator = "-";
  renderSummaryDisplay(saveNumber, operator);
  renderOperationDisplay(currentInput);
}
function multipliziern() {
  startOperate();
  currentInput = 0;
  operator = "*";
  renderSummaryDisplay(saveNumber, operator);
  renderOperationDisplay(currentInput);
}
function dividieren() {
  startOperate();
  currentInput = 0;
  operator = "/";
  renderSummaryDisplay(saveNumber, operator);
  renderOperationDisplay(currentInput);
}
function sumary() {
  startOperate();
  operator = "=";

  renderSummaryDisplay(saveNumber, operator);
  renderOperationDisplay(saveNumber);
}

function reset() {
  currentInput = 0;
  saveNumber = 0;
  flowSummery = 0;
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
    newParagraph.innerHTML = `${currentInput} ${operator} ${saveNumber} = ${flowSummery}`;
    newRenderelement.appendChild(newParagraph);
  } else {
    newRenderelement.innerHTML = "";
    killswitch = false;
    console.log("lets kill something");
  }
}
function appendToDisplay(number) {
  if (operator === "=") {
    currentInput = 0;
    saveNumber = 0;
    operator = "+";
    flowSummery = 0;
    renderOperationDisplay(currentInput);
    renderSummaryDisplay("", "");
  } else {
    currentInput = currentInput * 10 + number;
    renderOperationDisplay(currentInput);
  }
}
