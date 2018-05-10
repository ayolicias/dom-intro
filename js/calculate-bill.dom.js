//get a reference to the calculate button
var calcBtn = document.querySelector(".calculateBtn");
//
// get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringField = document.querySelector(".billString");

function calculateBillDOM() {
  var bill = billStringField.value;

  var billStringTotal = calculateBills(bill);

  billTotalElement.innerHTML = billStringTotal;

  if (billStringTotal >= 30) {
    billTotalElement.classList.add("danger");
  }

   else if (billStringTotal >= 20) {
    billTotalElement.classList.add("warning");
  }

  if (billStringTotal < 30) {
    billTotalElement.classList.remove("danger");
  }

  if (billStringTotal < 20) {
    billTotalElement.classList.remove("warning");
  }

}

calcBtn.addEventListener('click', calculateBillDOM);
