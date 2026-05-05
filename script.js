let currNumber = 0;
let saveNumber = 0;
let operator = "";
let flowSummery = "";
// append To Display

function startOperate() {
  let currsummery = 0;
  if (operator === "+") {
    currsummery = currNumber + saveNumber;
    flowSummery = currsummery;
    renderResult();
    saveNumber = currsummery;

    console.log(flowSummery);
  } else if (operator === "-") {
    currsummery = saveNumber - currNumber;
    flowSummery = currsummery;
    renderResult();
    saveNumber = currsummery;
  } else if (operator === "*") {
    currsummery = saveNumber * currNumber;
    flowSummery = currsummery;
    renderResult();
    saveNumber = currsummery;
  } else if (operator === "/") {
    currsummery = saveNumber / currNumber;
    flowSummery = currsummery;
    renderResult();
    saveNumber = currsummery;
  } else if (operator === "=") {
    renderResult();
  } else {
    saveNumber = currNumber;
  }
}

function add() {
  startOperate();

  operator = "+";

  renderSummaryDisplay(saveNumber, operator);
  renderOperationDisplay(currNumber);

  currNumber = 0;
}
function subtrahieren() {
  startOperate();
  currNumber = 0;
  operator = "-";
  renderSummaryDisplay(saveNumber, operator);
  renderOperationDisplay(currNumber);
}
function multipliziern() {
  startOperate();
  currNumber = 0;
  operator = "*";
  renderSummaryDisplay(saveNumber, operator);
  renderOperationDisplay(currNumber);
}
function dividieren() {
  startOperate();
  currNumber = 0;
  operator = "/";
  renderSummaryDisplay(saveNumber, operator);
  renderOperationDisplay(currNumber);
}
function sumary() {
  startOperate();
  operator = "=";
  currNumber = saveNumber;

  renderSummaryDisplay(saveNumber, operator);
  renderOperationDisplay(saveNumber);
}

function reset() {
  document.getElementById("operationDisplay").innerHTML = "";
  document.getElementById("summery").innerHTML = "";
  document.getElementById("resultDiv").innerHTML = "";
  currNumber = 0;
  saveNumber = 0;
  flowSummery = 0;
  operator = "";
  renderOperationDisplay(currNumber);
  renderSummaryDisplay(saveNumber, operator);
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
  const newRenderelement = document.getElementById("resultDiv");

  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = `${currNumber} ${operator} ${saveNumber} = ${flowSummery}`;
  newRenderelement.appendChild(newParagraph);
}
function appendToDisplay(number) {
  if (operator === "=") {
    currNumber = 0;
    saveNumber = 0;
    operator = "+";
    flowSummery = 0;
    renderOperationDisplay(currNumber);
    renderSummaryDisplay("", "");
    console.log("test");
  } else {
    currNumber = currNumber * 10 + number;
    renderOperationDisplay(currNumber);
  }
}
