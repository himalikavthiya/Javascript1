const billInput = document.getElementById('input');
const tipButtons = document.querySelectorAll('.btn');
const customTipInput = document.getElementById('customTip');
const peopleInput = document.getElementById('people');
const totalVal = document.querySelectorAll('.tipValue')
const reset = document.querySelector('.reset');

let billVal = 0;
let peopleVal = 1;
let tipVal = 0.15;

billInput.addEventListener('input', calculateTip);
customTipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

function calculateTip() {
  let billVal = parseFloat(billInput.value);
  let customTipPer = parseFloat(customTipInput.value) / 100;
  let peopleVal = parseInt(peopleInput.value);

  if (isNaN(billVal) || isNaN(peopleVal) || billVal <= 0 || peopleVal <= 0) {
    totalVal.textContent = "$ 0";
    return;
  }

  let tipVal;
  if (customTipPer) {
    tipVal = customTipPer;
  } else {
    tipVal = parseFloat(this.value);
  }
  let tip = billVal * tipVal / peopleVal;
  let totalAmount = billVal * (tipVal + 1) / peopleVal;

  totalVal[0].textContent = '$' + tip.toFixed(2);
  totalVal[1].textContent = '$' + totalAmount.toFixed(2);
}
//button click
function hadleButton(val) {
  let long = parseInt(val)
  let billVal = parseFloat(billInput.value);
  let customTipPer = parseFloat(long) / 100;
  let peopleVal = parseInt(peopleInput.value);

  if (isNaN(billVal) || isNaN(peopleVal) || billVal <= 0 || peopleVal <= 0) {
    totalVal.textContent = "$ 0";
    return;
  }
  let tip = billVal * customTipPer / peopleVal;
  let totalAmount = billVal * (customTipPer + 1) / peopleVal;

  totalVal[0].textContent = '$' + tip.toFixed(2);
  totalVal[1].textContent = '$' + totalAmount.toFixed(2);
}

//reset button code
reset.addEventListener("click", resetValue = () => {
  billInput.value = "";
  customTipInput.value = "";
  tipButtons.forEach(button => {
    button.classList.remove("active");
  });
  peopleInput.value = 0;
  totalVal[0].textContent = "$ 0";
  totalVal[1].textContent = "$ 0";
});
















// // Wait for the DOM to load
// document.addEventListener("DOMContentLoaded", function() {
//     // Get DOM elements
//     var billInput = document.getElementById("input");
//     var customTipInput = document.getElementById("customTip");
//     var tipButtons = document.querySelectorAll(".btn");
//     var peopleInput = document.getElementById("people");
//     var tipPercentageDisplay = document.getElementById("tipPercentage");
//     var tipValueDisplay = document.getElementById("tipValue");
//     var resetButton = document.querySelector(".reset");

//     // Add event listeners
//     billInput.addEventListener("input", calculateTip);
//     customTipInput.addEventListener("input", calculateTip);
//     tipButtons.forEach(function(button) {
//       button.addEventListener("click", handleTipButtonClick);
//     });
//     peopleInput.addEventListener("input", calculateTip);
//     resetButton.addEventListener("click", resetCalculator);

//     // Calculate and update the tip amounts
//     function calculateTip() {
//       var billAmount = parseFloat(billInput.value);
//       var customTipPercentage = parseFloat(customTipInput.value);
//       var numberOfPeople = parseInt(peopleInput.value);

//       if (isNaN(billAmount) || isNaN(numberOfPeople) || billAmount <= 0 || numberOfPeople <= 0) {
//         tipPercentageDisplay.textContent = "$ 0";
//         tipValueDisplay.textContent = "$ 0";
//         return;
//       }

//       var tipPercentage;
//       if (customTipPercentage) {
//         tipPercentage = customTipPercentage;
//       } else {
//         tipPercentage = parseFloat(this.value);
//       }

//       var tipAmount = (billAmount * tipPercentage) / 100;//billamount=200 //tipamount=10
//       var totalAmount = billAmount + tipAmount;//210
//       var tipAmountPerPerson = tipAmount / numberOfPeople;//peopleamount=3 //tipamountperperson=3.33
//       var totalAmountPerPerson = totalAmount / numberOfPeople;//66.6

//       tipPercentageDisplay.textContent = "$ " + tipAmountPerPerson.toFixed(2);
//       tipValueDisplay.textContent = "$ " + totalAmountPerPerson.toFixed(2);
//     }

//     // Handle custom tip button click
//     function handleTipButtonClick() {
//       // Remove the "active" class from all buttons
//       tipButtons.forEach(function(button) {
//         button.classList.remove("active");
//       });

//       // Add the "active" class to the clicked button
//       this.classList.add("active");

//       // Clear the custom tip input value
//       customTipInput.value = "";

//       // Calculate the tip
//       calculateTip.call(this);
//     }

//     // Reset the calculator
//     function resetCalculator() {
//       billInput.value = "";
//       customTipInput.value = "";
//       tipButtons.forEach(function(button) {
//         button.classList.remove("active");
//       });
//       peopleInput.value = 1;
//       tipPercentageDisplay.textContent = "$ 0";
//       tipValueDisplay.textContent = "$ 0";
//     }
//   });