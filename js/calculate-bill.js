function calculateBills(totalString) {
  var totalBill = 0.00;
  //split the string
  var billArray = totalString.split(",");
  // a variable for the total phone bill.
  for (var i = 0; i < billArray.length; i++) {
    var current = billArray[i].trim();
    if (current == "call") {
      totalBill += 2.75;
    }
    else if (current == "sms") {
      totalBill += 0.75;
    }
  }
  return totalBill.toFixed(2);
}
