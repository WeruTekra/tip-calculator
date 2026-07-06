console.log("Hello, World!")


// Writting the variables to grab the elements we need

const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");


const tipAmountE1 = document.getElementById("tip-amount");
const tipPerPersonE1 = document.getElementById("tip-per-person");
const totalPerPersonE1 = document.getElementById("total-per-person");


// Get the calculate button
const calculateBtn = document.getElementById("calculateBtn");


// Creating a function to calculate the amounts

function calculate() {

    const bill = parseFloat(billInput.value);
    const tip = parseFloat(tipInput.value);
    const people = parseInt(peopleInput.value);


    if (isNaN(bill) || isNaN(tip) || isNaN(people) || people < 1) {

        tipAmountE1.textContent = "$0.00";
        tipPerPersonE1.textContent = "$0.00";
        totalPerPersonE1.textContent = "$0.00";

        return;
    }

    const tipAmount = bill * (tip / 100);
    // const totalBill = bill + tipAmount
    const tipPerPerson = tipAmount / people;
    const totalPerPerson = (bill + tipAmount) / people;


    tipAmountE1.textContent = "$" + tipAmount.toFixed(2);
    tipPerPersonE1.textContent = "$" + tipPerPerson.toFixed(2);
    totalPerPersonE1.textContent = "$" + totalPerPerson.toFixed(2);
}


billInput.addEventListener("input", calculate);
tipInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);



