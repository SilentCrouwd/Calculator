let currNumber = 0;
let saveNumber = 0;
let operator = "";

// append To Display
function appendToDisplay(number) {
  currNumber = currNumber * 10 + number;
  renderOperationDisplay();
}

function startOperate() {
  let currsummery = 0;
  if (operator === "+") {
    currsummery = currNumber + saveNumber;
    saveNumber = currsummery;
  } else if (operator === "-") {
    currsummery = saveNumber - currNumber;
    saveNumber = currsummery;
  } else if (operator === "*") {
    currsummery = saveNumber * currNumber;
    saveNumber = currsummery;
  } else if (operator === "/") {
    currsummery = saveNumber / currNumber;
    saveNumber = currsummery;
  } else {
    saveNumber = currNumber;
  }
}

function add() {
  startOperate();

  operator = "+";

  renderSummaryDisplay();
  renderOperationDisplay();

  currNumber = 0;
}
function subtrahieren() {
  startOperate();
  currNumber = 0;
  operator = "-";
  renderSummaryDisplay();
  renderOperationDisplay();
}
function multipliziern() {
  startOperate();
  currNumber = 0;
  operator = "*";
  renderSummaryDisplay();
  renderOperationDisplay();
}
function dividieren() {
  startOperate();
  currNumber = 0;
  operator = "/";
  renderSummaryDisplay();
  renderOperationDisplay();
}
// update and add

// RenderFN
function renderOperationDisplay() {
  const newDisplay = document.getElementById("operationDisplay");
  newDisplay.innerHTML = `${currNumber}`;
}

function renderSummaryDisplay() {
  const newSummeryDisplay = document.getElementById("summery");
  newSummeryDisplay.innerHTML = `${saveNumber} ${operator}`;
}
function renderResult() {
  const newRenderelement = document.getElementById("resultDiv");
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = `${currNumber} ${operator} ${saveNumber} = `;
  newRenderelement.appendChild(newParagraph);
}
