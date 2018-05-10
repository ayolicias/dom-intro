function RadioLogic() {
  var callBill = 0;
  var smsBill = 0;
  var TotalBill = 0;

  function CalculateRadoiBill(billType) {
    if (billType === 'call') {
      callBill += 2.75;

    }
    else if (billType === 'sms') {
      smsBill += 0.75
    }
    TotalBill = callBill + smsBill;

  }

  function getcallBill() {
    return callBill.toFixed(2);
  }

  function getsmsBill() {
    return smsBill.toFixed(2);
  }

  function getTotalBill() {
    return TotalBill.toFixed(2);
  }

  return {
    callBill: getcallBill,
    smsBill: getsmsBill,
    TotalBill: getTotalBill,
    calc: CalculateRadoiBill
  }
}

var radio = RadioLogic();
