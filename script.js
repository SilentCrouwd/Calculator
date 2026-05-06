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
// Operation section

function startOperate() {
  let currsummery = 0; //Handle Variable

  // Ist operator gleich +
  if (operator === "+") {
    // rechne aus
    currsummery = currentInput + savedInput;
    //  setze Globales ergebniss für Render
    summeryGlobal = currsummery;
    // update
    updateResultContainer();
    // übergib das ergenis zur geschpeicherten Variable
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
  }
  // Ist der Operator =
  else if (operator === "=") {
    if (operator !== "=") {
      //führe das nur aus wenn der operator nicht = ist
      updateResultContainer();
    } else {
      return;
    }
  } else {
    savedInput = currentInput;
  }
}
// Function for Buttons

function add() {
  // ausrechnen
  startOperate();
  // set Operator
  operator = "+";
  // update
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
  // erst ausrechenen
  startOperate();
  // Dann Operator setzen
  operator = "=";
  // dann updaten
  updateProvSummery(savedInput, operator);
  updateCurrentInputDisplay(savedInput);
}

function reset() {
  // setz alles auf null
  currentInput = 0;
  savedInput = 0;
  summeryGlobal = 0;

  // Operator leer
  operator = "";

  // updates mit leeren strings
  updateCurrentInputDisplay(currentInput);
  updateProvSummery("", "");

  // set Kill button
  killswitch = true;

  // führe update aus
  updateResultContainer();
}

// update and add

// RenderFN

function updateCurrentInputDisplay(text) {
  const newDisplay = document.getElementById("CurrentInputDisplay");

  newDisplay.innerHTML = text;
}
// Update Provisorisches Summery
function updateProvSummery(text, text2) {
  const newSummeryDisplay = document.getElementById("summery");

  newSummeryDisplay.innerHTML = text + text2;
}
function updateResultContainer() {
  const newParagraph = document.createElement("p");
  const newRenderelement = document.getElementById("resultDiv");

  // wenn Killswitch false dann rendern
  if (killswitch === false) {
    newParagraph.innerHTML = `${currentInput} ${operator} ${savedInput} = ${summeryGlobal}`;
    newRenderelement.appendChild(newParagraph); //Appendchild !!!
  } else {
    //falls true Kill alles
    newRenderelement.innerHTML = "";
    killswitch = false;
    console.log("lets kill something");
  }
}
