function BillLogic(){
  var calls = 0;
  var smses = 0;
  var total = 0;

  function calculateBill(billType) {
    if (billType === 'call') {
      calls += 2.75;
    } else if (billType === 'sms') {
      smses += 0.75
    }
    total = calls + smses;
  }

  function getCalls() {
    return calls.toFixed(2);
  }

  function getSmses() {
    return smses.toFixed(2);
  }

  function getTotal() {
    return total.toFixed(2);
  }

  return {
    calls: getCalls,
    smses: getSmses,
    total: getTotal,
    calculate: calculateBill
  }
}

var textBill = BillLogic();
