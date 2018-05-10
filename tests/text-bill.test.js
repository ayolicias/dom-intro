describe('textBill Widget', function(){
  it ('should add total for call bill', function(){
    var text = BillLogic();
    text.calculate('call');
    text.calculate('call');
    text.calculate('call');
    text.calculate('call');

    assert.equal(text.calls(), 11.00);
  });
  it ('should add total for sms Bill', function(){
    var text = BillLogic();
    text.calculate('sms');
    text.calculate('sms');
    text.calculate('sms');
    text.calculate('sms');

    assert.equal(text.smses(), 3.00);
  });
  it ('should add total for calls and sms Bill', function(){
  var text = BillLogic();
  text.calculate('sms');
  text.calculate('sms');
  text.calculate('sms');
  text.calculate('sms');

  text.calculate('call');
  text.calculate('call');
  text.calculate('call');
  text.calculate('call');

  assert.equal(text.total(), 14.00);
});
});

