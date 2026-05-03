let currInput = 0;
let savedInput = 0;
let currOperator = 0;
let currSummery = 0;
// to Display
function appendToDisplay(num) {
  currInput = currInput * 10 + num;
  console.log(currInput);
}
// übergabe
function transfer() {
  savedInput = currInput;
  console.log("gespeichert" + savedInput);
}
// Plus
function addOperation(operation) {
  transfer();
  currOperator = operation;
  currInput = 0;
}
// minus
function minus() {}

// mal
function mal() {}
// geteilt
function geteilt() {}

// istgleich
function sumary() {
  currSummery = eval(`${currInput} ${currOperator} ${savedInput} `);
  console.log("ergebnis" + currSummery);
  currInput = currSummery;

  transfer();
}
