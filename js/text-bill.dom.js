// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var addToBillBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector('.callTotalOne');
var smsTotalOne = document.querySelector('.smsTotalOne')
var totalOne = document.querySelector('.totalOne');

function textBillTotal() {
  var billTextEntered = billTypeText.value.trim();
  if (billTextEntered) {
    textBill.calculate(billTextEntered);
  }
  var total = textBill.total();
  callTotalOne.innerHTML = textBill.calls();
  smsTotalOne.innerHTML = textBill.smses();
  totalOne.innerHTML = total;

  if (total > 30 & total <= 50) {
    totalOne.classList.add("warning");
  }

  else if (total > 50) {
    totalOne.classList.add("danger");
  }
}


//add an event listener for when the add button is pressed
addToBillBtn.addEventListener('click', textBillTotal);
