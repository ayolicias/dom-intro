// get a reference to the sms or call radio buttons
var billItemType = document.querySelector('.billItemType');

//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');

//create a variable that will keep track of the total bill
var callTotalTwo = document.querySelector('.callTotalTwo');
var smsTotalTwo = document.querySelector('.smsTotalTwo');
var totalTwo = document.querySelector('.totalTwo');

//for when the add button is pressed

function radiobuttonBill(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
    radio.calc(checkedRadioBtn.value);
  }

    var TotalBill = radio.TotalBill();
    callTotalTwo.innerHTML = radio.callBill();
    smsTotalTwo.innerHTML = radio.smsBill();
    totalTwo.innerHTML = radio.TotalBill();

if (TotalBill>= 50){
  totalTwo.classList.add("danger");
}
else if (TotalBill>=30) {
  totalTwo.classList.add("warning");
}
}

radioBillAddBtn.addEventListener('click', radiobuttonBill);
